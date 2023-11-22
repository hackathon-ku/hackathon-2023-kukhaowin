from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import *


urlpatterns = [
    path('login/',  LoginAPIView.as_view(), name='token_obtain_pair'),
    path('token/refresh/',
         jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterUserAPI.as_view(), name='register'),
    path('me/', GetUserAPI.as_view(), name='me'),

]
