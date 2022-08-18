try:
    from .base import *
except ImportError:
    pass


# INSTALLED_APPS += ["debug_toolbar", "ddt_api_calls"]
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
# urlpatterns += [path('__debug__/', include(debug_toolbar.urls))]
EMAIL_BACKEND = "django.core.mail.backends.console.EMAILBACKEND"
