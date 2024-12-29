from headless_cms.admin import auto_admins
from django.contrib import admin
from main.models import Post, PostImage

auto_admins([Post, PostImage])
