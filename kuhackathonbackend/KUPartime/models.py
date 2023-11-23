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

    def __str__(self):
        return self


class PartimeProfileHistory(models.Model):
    id = models.AutoField(primary_key=True)
    parttime = models.ForeignKey(PartimePost, on_delete=models.CASCADE)
    profile = models.ForeignKey(ProfilesPartime, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[
        ('success', 'Success'),
        ('working', 'Working'),
        ('pending', 'Pending'),
        ('reject', 'Reject')
    ], default='pending')

    def __str__(self):
        return self
