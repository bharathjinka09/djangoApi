from django.shortcuts import render, redirect
from django.http import JsonResponse

# third party imports
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics

from .serializers import PostSerializer
from .models import Post

'''
Command to create token API key
python manage.py drf_create_token admin
'''

def home(request):
	posts = Post.objects.all()
	context = {'posts':posts}
	return render(request,'index.html',context=context)

def create(request):
	posts = Post.objects.all()
	context = {'posts':posts}
	return render(request,'create.html',context=context)


class TestView(APIView):

	permission_classes = [IsAuthenticated]

	def get(self, request, *args, **kwargs):
		qs = Post.objects.all()
		post = qs.first()
		# serializer = PostSerializer(qs, many=True)
		serializer = PostSerializer(post)
		return Response(serializer.data)

	def post(self, request, *args, **kwargs):
		serializer = PostSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors)



class PostView(mixins.ListModelMixin, mixins.CreateModelMixin ,generics.GenericAPIView):
	serializer_class = PostSerializer
	queryset = Post.objects.all()

	def get(self, request, *args, **kwargs):
		return self.list(request, *args, **kwargs)
	
	def post(self, request, *args, **kwargs):
		return self.create(request, *args, **kwargs)


class PostCreateView(mixins.ListModelMixin, generics.CreateAPIView):
	serializer_class = PostSerializer
	queryset = Post.objects.all()

	def get(self, request, *args, **kwargs):
		return self.list(request, *args, **kwargs)


class PostListCreateView(generics.ListCreateAPIView):
	serializer_class = PostSerializer
	queryset = Post.objects.all()

class PostListCreateView(generics.ListCreateAPIView):
	serializer_class = PostSerializer
	queryset = Post.objects.all()

class PostRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
	serializer_class = PostSerializer
	queryset = Post.objects.all()

class PostRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
	serializer_class = PostSerializer
	queryset = Post.objects.all()

class PostRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
	serializer_class = PostSerializer
	queryset = Post.objects.all()

class PostRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
	serializer_class = PostSerializer
	queryset = Post.objects.all()
