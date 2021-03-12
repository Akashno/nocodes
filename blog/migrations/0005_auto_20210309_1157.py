# Generated by Django 3.1.7 on 2021-03-09 06:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_remove_post_author'),
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('age', models.IntegerField(null=True)),
                ('image', models.ImageField(null=True, upload_to='author_pics')),
                ('short_title', models.CharField(max_length=10, null=True)),
                ('email', models.CharField(max_length=200, null=True)),
                ('instagram', models.CharField(max_length=200, null=True)),
                ('github', models.CharField(max_length=200, null=True)),
                ('twitter', models.CharField(max_length=200, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='post',
            name='author',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.author'),
        ),
    ]
