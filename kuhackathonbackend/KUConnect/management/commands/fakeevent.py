from django.core.management.base import BaseCommand
from User.models import UserProfiles as User
from KUConnect.models import *
from django_seed import Seed
from django.core.management.base import BaseCommand
from User.models import UserProfiles as User
from KUConnect.models import *
from django_seed import Seed
import random


class Command(BaseCommand):
    help = 'Create random events'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int,
                            help='Indicates the number of users to be created')

    def handle(self, *args, **kwargs):
        seeder = Seed.seeder()

        TYPE_IN_CHOICES = [
            'Art',
            'Music',
            'Education',
            'Wellness',
            'Sciences',
            'Technology',
            'Sports',
            'Other',
        ]

        seeder.add_entity(Event, kwargs['total'], {
            'name': lambda x: seeder.faker.name(),
            'description': lambda x: seeder.faker.text(),
            'image_post': lambda x: seeder.faker.image_url(),
            'type': lambda x: seeder.faker.random_element(TYPE_IN_CHOICES),
            'date_register': lambda x: seeder.faker.date(),
            'date_end_register': lambda x: seeder.faker.date(),
            'date_start': lambda x: seeder.faker.date(),
            'date_end': lambda x: seeder.faker.date(),
            'latitude': lambda x: seeder.faker.latitude(),
            'longitude': lambda x: seeder.faker.longitude(),
            'student_limit': lambda x: seeder.faker.random_int(min=0, max=100),
            'activity_point': lambda x: seeder.faker.random_int(min=0, max=100),
        })

        seeder.add_entity(EventImage, kwargs['total'], {
            'event': lambda x: seeder.faker.random_element(Event.objects.all()),
            'image': lambda x: seeder.faker.image_url(),
        })

        # Add random events to users
        # users = User.objects.all()
        # events = Event.objects.all()

        # for user in users:
        #     num_events = random.randint(1, len(events))
        #     user.favorites_events.add(*random.sample(list(events), num_events))

        seeder.execute()
