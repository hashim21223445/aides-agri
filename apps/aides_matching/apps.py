from django.apps import AppConfig


class AidesMatchingConfig(AppConfig):
    name = "aides_matching"

    def ready(self):
        # ensure siret NAF codes mapping is run at application startup
        from . import siret  # noqa
