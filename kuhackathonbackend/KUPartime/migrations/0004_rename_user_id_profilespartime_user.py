# Generated by Django 4.2.7 on 2023-11-23 15:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('KUPartime', '0003_rename_user_profilespartime_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profilespartime',
            old_name='user_id',
            new_name='user',
        ),
    ]