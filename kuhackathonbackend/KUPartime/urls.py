from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import *


urlpatterns = [
    path('post/',  PartTimeAPI.as_view(), name='partime_post'),
    path('post/<int:id>/', PartTimeDetailAPI.as_view(),
         name='partime_post_detail'),

]
