# Generated by Django 3.1.7 on 2021-03-11 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0010_auto_20210311_1317'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='user_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='author_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
