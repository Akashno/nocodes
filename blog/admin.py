from django.contrib import admin

# Register your models here.
from blog.models import *

admin.site.register(Post)
admin.site.register(Section)
admin.site.register(Author)
admin.site.register(Comment)