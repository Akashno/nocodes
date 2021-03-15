from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from blog.filters import ModelFilter
from blog.models import Post, Section, Comment
from nocodes import settings


def home(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'blog/home.html', context)


def blog_post(request,pk):
    post = Post.objects.get(id=pk)
    sections = Section.objects.filter(post=post)
    comments = Comment.objects.filter(post=post).order_by('-id')
    if request.POST:
        id = request.POST.get('id')
        post = Post.objects.get(id=id)

        comment = request.POST.get('comment')
        comment = Comment(post=post, user=request.user, body=comment)

        comment.save()
        comment = Comment.objects.filter(id=comment.id)
        comment = serializers.serialize("json", comment)
        response = JsonResponse({'comment': comment})

        return response
    context = {'post':post,'sections':sections,'comments':comments}
    return render(request, 'blog/blog_post.html',context)


def blogs(request):
    posts = Post.objects.all()
    if request.POST:
         text = request.POST.get('text')
         posts = ModelFilter(model_objects=posts, text=text).filter()
         posts = serializers.serialize("json", posts)
         response = JsonResponse({'posts': posts})
         return response
    context = {'posts':posts,'filter':filter}
    return render(request, 'blog/blogs.html', context)


