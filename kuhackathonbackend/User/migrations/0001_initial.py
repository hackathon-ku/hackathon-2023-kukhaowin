# Generated by Django 4.2.7 on 2023-11-22 09:19

import User.models
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('KUConnect', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfiles',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=255)),
                ('fullname', models.TextField(blank=True, null=True)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('profile', models.URLField(blank=True, max_length=255)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('student_id', models.CharField(blank=True, max_length=255, null=True)),
                ('phone', models.CharField(blank=True, max_length=20, null=True)),
                ('gender', models.CharField(blank=True, choices=[('Male', 'Male'), ('Female', 'Female')], max_length=6, null=True)),
                ('faculty', models.CharField(blank=True, max_length=255, null=True)),
                ('major', models.CharField(blank=True, max_length=255, null=True)),
                ('year', models.IntegerField(blank=True, null=True)),
                ('gpa', models.FloatField(blank=True, null=True)),
                ('gpax', models.FloatField(blank=True, null=True)),
                ('advisor', models.CharField(blank=True, max_length=255, null=True)),
                ('birth_date', models.DateField(blank=True, null=True)),
                ('culture', models.CharField(blank=True, max_length=255, null=True)),
                ('activity_total', models.IntegerField(default=0)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('events', models.ManyToManyField(blank=True, related_name='userprofiles_events', to='KUConnect.event')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', User.models.UserProfilesManager()),
            ],
        ),
    ]
