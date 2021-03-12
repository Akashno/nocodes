from django.urls import path

from blog.views import *

urlpatterns = [
    path('', home, name='home'),
    path('blog_post/<int:pk>', blog_post, name='blog_post'),
    path('blogs/', blogs, name='blogs'),



]