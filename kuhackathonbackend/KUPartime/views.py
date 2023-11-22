from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from .serializers import *

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
