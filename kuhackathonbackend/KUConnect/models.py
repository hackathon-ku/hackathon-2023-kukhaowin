from django.db import models


class Event(models.Model):
    ART = 'Art'
    MUSIC = 'Music'
    EDUCATION = 'Education'
    WELLNESS = 'WELLNESS'
    SCIENCES = 'Sciences'
    TECHNOLOGY = 'Technology'
    SPORTS = 'Sports'
    OTHER = 'Other'

    TYPE_IN_CHOICES = [
        (ART, 'Art'),
        (MUSIC, 'Music'),
        (EDUCATION, 'Education'),
        (WELLNESS, 'Wellness'),
        (SCIENCES, 'Sciences'),
        (TECHNOLOGY, 'Technology'),
        (SPORTS, 'Sports'),
        (OTHER, 'Other'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    image_post = models.URLField()
    type = models.CharField(
        max_length=100, choices=TYPE_IN_CHOICES, blank=True, null=True)
    date_register = models.DateField()
    date_end_register = models.DateField()
    date_start = models.DateField()
    date_end = models.DateField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    student_limit = models.IntegerField()
    activity_point = models.IntegerField()
    current_student = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class EventImage(models.Model):
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(
        Event, on_delete=models.SET_NULL, related_name='event_image', blank=True, null=True)
    image = models.URLField()


class EventJoin(models.Model):
    PENDING = 'Pending'
    APPROVED = 'Approved'
    REJECTED = 'Rejected'

    STATUS_IN_CHOICES = [
        (PENDING, 'Pending'),
        (APPROVED, 'Approved'),
        (REJECTED, 'Rejected'),

    ]

    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey('User.UserProfiles', on_delete=models.CASCADE)
    status = models.CharField(
        max_length=100, choices=STATUS_IN_CHOICES, default='Pending')


class EventPost(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey('User.UserProfiles', on_delete=models.CASCADE)
    content = models.TextField()
    date_post = models.DateField(auto_now_add=True)
    like = models.IntegerField(default=0)
    comment = models.IntegerField(default=0)
    share = models.IntegerField(default=0)
