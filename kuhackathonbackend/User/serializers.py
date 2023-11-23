from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import *
from django.contrib.auth import password_validation
from django.contrib.auth.models import Group
from django.contrib.auth.models import Permission


class UserProfilesSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfiles
        fields = '__all__'
        read_only_fields = ['id']
        extra_kwargs = {
            'password': {'write_only': True},
            'last_login': {'write_only': True},


        }

    def validate(self, attrs):
        # password
        password = attrs.get('password', '')
        errors = dict()
        try:
            password_validation.validate_password(password=password)
        except password_validation.ValidationError as e:
            errors['password'] = list(e.messages)

        if errors:
            raise serializers.ValidationError(errors)

        return super(UserProfilesSerializer, self).validate(attrs)

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = self.Meta.model(**validated_data)
        print(user)
        if password is not None:
            user.set_password(password)

        user.save()

        return user

    def update(self, instance, validated_data):

        password = validated_data.pop('password', None)

        if password is not None:
            instance.set_password(password)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return super().update(instance, validated_data)

    def delete(self, instance):
        return instance.delete()


class LoginSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        return token

    def validate(self, attrs):

        user = UserProfiles.objects.filter(
            email=attrs.get('email', '')).first()
        print(user)

        if user is None:
            raise serializers.ValidationError("User not found.")

        if not user.is_active:
            raise serializers.ValidationError("User is not active.")

        data = super(LoginSerializer, self).validate(attrs)
        print(data)

        return data
