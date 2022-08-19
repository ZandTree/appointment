from django.views.generic import TemplateView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class Home(TemplateView):
    template_name = "core/index.html"


class Start(APIView):
    def post(self, request, *args, **kwargs):
        try:
            event = request.data.get("event")
            color = request.data.get("color")
            date = request.data.get("date")
            print(date)
            return Response(
                {"resp": "Successfully received data", "status": "success"},
                status=status.HTTP_200_OK,
            )
        except:

            return Response(
                {"error": "Failed to get data about event"},
                status=status.HTTP_404_NOT_FOUND,
            )
