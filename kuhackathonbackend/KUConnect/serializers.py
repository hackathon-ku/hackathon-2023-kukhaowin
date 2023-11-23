from rest_framework import serializers
from .models import *


class EventImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventImage
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    event_image = EventImageSerializer(many=True, read_only=True)
    favorite = serializers.SerializerMethodField('is_favorite')
    join = serializers.SerializerMethodField('is_join')

    def is_join(self, event):
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
            return event in user.events.all()
        return False

    def is_favorite(self, event):
        user = None
        request = self.context.get("request")
        print(request)
        if request and hasattr(request, "user"):
            user = request.user
            print(event in user.favorites_events.all())
            return event in user.favorites_events.all()
        return False

    class Meta:
        model = Event
        fields = [
            'id',
            'name',
            'description',
            'image_post',
            'type',
            'date_register',
            'date_end_register',
            'date_start',
            'date_end',
            'latitude',
            'longitude',
            'student_limit',
            'activity_point',
            'current_student',
            'event_image',
            'favorite',
            'join'
        ]

    #    class EventSerializer(serializers.ModelSerializer):
    #             is_favorite = serializers.SerializerMethodField()

    #             class Meta:
    #                 model = Event
    #                 fields = ['id', 'name', 'description', 'is_favorite']

    #             def get_is_favorite(self, event):
    #                 user = self.context['request'].user
    #                 return event in user.favorites_events.all()


class EventPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventPost
        fields = '__all__'
