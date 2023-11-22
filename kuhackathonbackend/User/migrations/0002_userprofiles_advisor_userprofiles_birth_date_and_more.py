# Generated by Django 4.2.7 on 2023-11-22 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofiles',
            name='advisor',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='userprofiles',
            name='birth_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='userprofiles',
            name='culture',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='userprofiles',
            name='faculty',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='userprofiles',
            name='gpa',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='userprofiles',
            name='gpax',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='userprofiles',
            name='major',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='userprofiles',
            name='year',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
