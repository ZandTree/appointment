from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework.views import APIView
from rest_framework.response import Response


class Home(TemplateView):
    template_name = "core/index.html"


class Start(APIView):
    def get(self, request, format=None):
        return Response("greet from api view")

    def post(self, request):
        return Response("got post request")
