from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.


def test_view(request):
	data = {
		'name':'bharath',
		'age' : 25 
	} 

	return JsonResponse(data)