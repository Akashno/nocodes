# Generated by Django 3.1.7 on 2021-03-08 11:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_post_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='section',
            name='post',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.post'),
        ),
    ]
