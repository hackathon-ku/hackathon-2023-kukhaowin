from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from .serializers import *
from .models import *

# Create your views here.


class PartTimeAPI(APIView):
    def get(self, request):
        serializer = PartimePostSerializer(
            PartimePost.objects.all(), many=True)
        return Response(
            status=status.HTTP_200_OK,
            data={
                "data": serializer.data,
                "message": "Get all partime post."
            }
        )

    def post(self, request):

        partime_id = request.data.get('partime_id')
        user = request.user

        profile = ProfilesPartime.objects.get(user=user)

        try:
            partime_profile_history = PartimeProfileHistory.objects.create(
                parttime=PartimePost.objects.get(id=partime_id),
                profile=profile
            )
            partime_profile_history.save()
        except Exception as e:
            print(e)
            return Response(
                status=status.HTTP_400_BAD_REQUEST,
                data={
                    "message": e
                }
            )

        return Response(
            status=status.HTTP_201_CREATED,
            data={

                "message": "Successfully join partime."
            }
        )


class PartTimeDetailAPI(APIView):
    def get(self, request, id):
        serializer = PartimePostSerializer(
            PartimePost.objects.get(id=id), many=False)
        return Response(
            status=status.HTTP_200_OK,
            data={
                "data": serializer.data,
                "message": "Get all partime post."
            }
        )

    def post(self, request):
        serializer = PartimePostSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(
            status=status.HTTP_201_CREATED,
            data={
                "data": serializer.data,
                "message": "Successfully created partime post."
            }
        )

    def put(self, request, id):
        serializer = PartimePostSerializer(
            PartimePost.objects.get(id=id), data=request.data, many=False)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response(
            status=status.HTTP_200_OK,
            data={
                "data": serializer.data,
                "message": "Successfully updated partime post."
            }
        )

    def delete(self, request, id):
        PartimePost.objects.get(id=id).delete()
        return Response(
            status=status.HTTP_200_OK,
            data={
                "message": "Successfully deleted partime post."
            }
        )


class ProfileAPI(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PartimeProfileSerializer

    def get(self, request):
        # serializer = self.serializer_class(request.user)
        profile = ProfilesPartime.objects.get(user=request.user)

        profile_ser = self.serializer_class(profile)

        return Response(
            status=status.HTTP_200_OK,
            data={
                "user": profile_ser.data,
                "message": "User Details.",
            })


class PartimeProfileHistoryAPI(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PartimeProfileHistorySerializer

    def get(self, request):
        user_profile_partime = ProfilesPartime.objects.get(user=request.user)
        serializer = self.serializer_class(
            PartimeProfileHistory.objects.filter(profile=user_profile_partime), many=True)

        return Response(
            status=status.HTTP_200_OK,
            data={
                "user": serializer.data,
                "message": "User Details.",
            })
