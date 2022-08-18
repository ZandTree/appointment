from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from django.urls import reverse_lazy

User = get_user_model()


@admin.register(User)
class UserAdmin(UserAdmin):
    list_display = ("username", "id", "email", "phone", "first_name", "last_name")
