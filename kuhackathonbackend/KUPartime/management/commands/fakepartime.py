from django.core.management.base import BaseCommand
from User.models import UserProfiles as User
from django_seed import Seed
from django.contrib.auth.hashers import make_password

from KUPartime.models import PartimePost as Partime


class Command(BaseCommand):
    help = 'Create random users'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int,
                            help='Indicates the number of users to be created')

    def handle(self, *args, **kwargs):
        seeder = Seed.seeder()
        seeder.add_entity(Partime, kwargs['total'],  {'title': lambda x: seeder.faker.word(),
                                                      'requirement': lambda x: seeder.faker.text(),
                                                      'image_poster': lambda x: seeder.faker.image_url(),
                                                      'location': lambda x: seeder.faker.word(),
                                                      'price': lambda x: seeder.faker.random_int(min=100, max=1000),
                                                      'date_start_work': lambda x: seeder.faker.date_time_this_year(before_now=True, after_now=False, tzinfo=None),
                                                      'date_end_work': lambda x: seeder.faker.date_time_this_year(before_now=False, after_now=True, tzinfo=None),
                                                      'description': lambda x: seeder.faker.text(),
                                                      'people': lambda x: seeder.faker.random_int(min=1, max=10)}
                          )

        seeder.execute()
