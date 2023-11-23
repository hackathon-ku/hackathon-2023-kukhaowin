from django.core.management.base import BaseCommand
from User.models import UserProfiles as User
from django_seed import Seed
from django.contrib.auth.hashers import make_password

from KUPartime.models import *


class Command(BaseCommand):
    help = 'Create random users'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int,
                            help='Indicates the number of users to be created')

    def handle(self, *args, **kwargs):
        seeder = Seed.seeder()
        seeder.add_entity(ProfilesPartime, kwargs['total'],  {
            'hours_work': lambda x: seeder.faker.random_int(min=1, max=10),
            'inspiration': lambda x: seeder.faker.text(),
            'spacial_skill': lambda x: seeder.faker.text(),
            'user': lambda x: seeder.faker.unique.random_element(User.objects.all()),

        }),

        seeder.execute()
