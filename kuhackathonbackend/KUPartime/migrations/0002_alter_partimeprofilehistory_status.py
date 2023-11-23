# Generated by Django 4.2.7 on 2023-11-23 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('KUPartime', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='partimeprofilehistory',
            name='status',
            field=models.CharField(choices=[('success', 'Success'), ('working', 'Working'), ('pending', 'Pending'), ('reject', 'Reject')], default='pending', max_length=20),
        ),
    ]