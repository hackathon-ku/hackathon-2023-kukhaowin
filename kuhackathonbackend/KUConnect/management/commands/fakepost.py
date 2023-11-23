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
        seeder.add_entity(EventPost, kwargs['total'], {
            'event': seeder.faker.random_element(Event.objects.all()),
            'user': seeder.faker.random_element(User.objects.all()),
            'content': seeder.faker.text(),
            'date_post': seeder.faker.date(),
            'like': seeder.faker.random_int(min=0, max=100),
            'comment': seeder.faker.random_int(min=0, max=100),
            'share': seeder.faker.random_int(min=0, max=100),
        })

        seeder.execute()
