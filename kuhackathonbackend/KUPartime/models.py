from django.db import models

# Create your models here.


class PartimePost(models.Model):
    title = models.CharField(max_length=100)
    image_poster = models.URLField(max_length=255, blank=True)
    requirement = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=100)
    price = models.IntegerField()
    date_start_work = models.DateTimeField()
    date_end_work = models.DateTimeField()
    description = models.TextField()
    people = models.IntegerField()

    def __str__(self):
        return self


class ProfilesPartime(models.Model):
    id = models.AutoField(primary_key=True)
    hours_work = models.IntegerField()
    inspiration = models.TextField()
    spacial_skill = models.TextField()
    user = models.OneToOneField(
        'User.UserProfiles', on_delete=models.SET_NULL, null=True, blank=True)
    parttime_history = models.ManyToManyField(
        PartimePost, blank=True, related_name="parttime_history")

    def __str__(self):
        return self
