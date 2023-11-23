from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import *


class PartimePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartimePost
        fields = '__all__'
        read_only_fields = ['id']


class PartimeProfileSerializer(serializers.ModelSerializer):
    # user = serializers.SerializerMethodField('get_user')

    # def get_user(self, obj):
    #     return obj.user

    class Meta:
        model = ProfilesPartime
        fields = '__all__'

        read_only_fields = ['id']


class PartimeProfileHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PartimeProfileHistory
        fields = '__all__'
        read_only_fields = ['id']
