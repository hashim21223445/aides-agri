from .default import *  # noqa

INTERNAL_IPS = [
    "127.0.0.1",
]

LOGGING = {}

STORAGES["staticfiles"]["BACKEND"] = (
    "django.contrib.staticfiles.storage.StaticFilesStorage"
)
