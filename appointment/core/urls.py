from django.urls import path

from .views import Start, Home

app_name = "core"

urlpatterns = [
    path("", Home.as_view(), name="home"),
    path("start/", Start.as_view(), name="start"),
]
