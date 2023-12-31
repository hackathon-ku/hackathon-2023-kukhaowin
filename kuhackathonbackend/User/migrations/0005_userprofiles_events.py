# Generated by Django 4.2.7 on 2023-11-22 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KUConnect', '0002_eventjoin'),
        ('User', '0004_remove_userprofiles_events'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofiles',
            name='events',
            field=models.ManyToManyField(blank=True, through='KUConnect.EventJoin', to='KUConnect.event'),
        ),
    ]
