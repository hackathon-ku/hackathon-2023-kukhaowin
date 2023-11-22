from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import *


class PartimePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartimePost
        fields = '__all__'
        read_only_fields = ['id']
