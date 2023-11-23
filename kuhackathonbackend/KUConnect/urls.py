from .views import *
from django.urls import path

urlpatterns = [
    path('event/', EventAPI.as_view(), name='event'),
    path('event/<int:pk>/', DetailEvents.as_view(), name='event_detail'),
    path('event/categories/<str:categories>/',
         EventCategoryAPI.as_view(), name='event_categories'),
    path('event/favourite/', FavoriteEventAPI.as_view(), name='event_favourite'),
    path('event/join/', EventJoinAPI.as_view(), name='event_join'),
    path('event/post/<int:pk>/', EventPostAPI.as_view(), name='event_post'),


]
