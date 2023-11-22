from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class EventAPI(APIView):

    serializer_class = EventSerializer

    def get(self, request):
        event = Event.objects.all()
        serializer = self.serializer_class(event, many=True)

        return Response(
            status=status.HTTP_200_OK,
            data={
                "event": serializer.data,
                "message": "Event Details.",
            })

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()

        return Response(
            status=status.HTTP_201_CREATED,
            data={"message": "Successfully Registered."})


class DetailEvents(APIView):
    serializers_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        event = Event.objects.get(pk=pk)
        serializer = self.serializers_class(
            event, context={'request': request})

        return Response(
            status=status.HTTP_200_OK,
            data={
                "event": serializer.data,
                "message": "Event Details.",
            })


class EventCategoryAPI(APIView):
    serializer_class = EventSerializer

    def get(self, request, categories):
        event = Event.objects.filter(type=categories)
        serializer = self.serializer_class(event, many=True)

        return Response(
            status=status.HTTP_200_OK,
            data={
                "event": serializer.data,
                "message": "Event Details.",
            })


class FavoriteEventAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        user.favorites_events.add(request.data['event_id'])

        return Response(
            status=status.HTTP_200_OK,
            data={
                "message": "Favorite Event Done.",
            })

    def get(self, request):
        user = request.user
        event = user.favorites_events.all()
        serializer = EventSerializer(event, many=True)
        return Response(
            status=status.HTTP_200_OK,
            data={
                "event": serializer.data,
                "message": "Event Details.",
            })


class EventJoinAPI(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        user.events.add(request.data['event_id'])

        return Response(
            status=status.HTTP_200_OK,
            data={
                "message": "Join Event Done.",
            })

    def get(self, request):
        user = request.user

        serializers = EventSerializer(user.events.all(), many=True)

        return Response(
            status=status.HTTP_200_OK,
            data={
                "event": serializers.data,
                "message": "Event Details.",
            })


class EventPostAPI(APIView):
    serializer_class = EventPostSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        event = Event.objects.get(pk=pk)
        event_post = EventPost.objects.filter(event=event)
        serializer = self.serializer_class(event_post, many=True)

        return Response(
            status=status.HTTP_200_OK,
            data={
                "event_post": serializer.data,
                "message": "Event Post Details.",
            })

    def post(self, request, pk):
        event = Event.objects.get(pk=pk)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(event=event, user=request.user)

        return Response(
            status=status.HTTP_201_CREATED,
            data={"message": "Successfully Registered."})
