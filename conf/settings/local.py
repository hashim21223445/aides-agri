from .default import *  # noqa


DEBUG = True

INSTALLED_APPS.extend(
    [
        "django_browser_reload",
        "debug_toolbar",
    ]
)

MIDDLEWARE.extend(
    [
        "debug_toolbar.middleware.DebugToolbarMiddleware",
        "django_browser_reload.middleware.BrowserReloadMiddleware",
    ]
)

INTERNAL_IPS = [
    "127.0.0.1",
]

LOGGING = {}
