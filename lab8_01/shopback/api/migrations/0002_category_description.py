# Generated by Django 5.1.7 on 2025-03-24 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='description',
            field=models.TextField(default='Description'),
            preserve_default=False,
        ),
    ]
