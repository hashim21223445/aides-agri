from django.urls import path
from django.views.generic import TemplateView


app_name = "ui"
urlpatterns = [
    path("", TemplateView.as_view(template_name="ui/base.html"), name="home"),
]
