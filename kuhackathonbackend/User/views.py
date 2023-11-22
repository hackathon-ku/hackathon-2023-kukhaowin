from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import *
from django.conf import settings
from django.shortcuts import redirect
import json
# Create your views here.


class LoginAPIView(TokenObtainPairView):
    serializer_class = LoginSerializer


class RegisterUserAPI(APIView):
    serializer_class = UserProfilesSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

        return Response(
            status=status.HTTP_201_CREATED,
            data={"message": "Successfully Registered."})


class GetUserAPI(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfilesSerializer

    def get(self, request):
        serializers = self.serializer_class(request.user)

        return Response(
            status=status.HTTP_200_OK,
            data={
                "user": serializers.data,
                "message": "User Details.",
            })
