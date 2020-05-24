"""drf_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token 

from core.views import *

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    # third party library
    path('rest-auth/', include('rest_auth.urls')),
    path('admin/', admin.site.urls),
    path('api/', TestView.as_view(), name='test'),
    path('posts/', PostView.as_view(), name='posts'),
    path('create/', PostCreateView.as_view(), name='create'),
    path('list-create/', PostListCreateView.as_view(), name='list-create'),
    # path('delete/<pk>', DeletePostView.as_view(), name='delete'),
    path('list-update-delete/<pk>', PostRetrieveUpdateDestroyAPIView.as_view(), name='list-update-delete'),
    path('api/token/',obtain_auth_token,name='obtain-token'),
    path('',home,name='home'),
    path('create-posts/',create,name='create'),
]
