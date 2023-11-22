from django.core.management.base import BaseCommand
from User.models import UserProfiles as User
from django_seed import Seed
from django.contrib.auth.hashers import make_password


class Command(BaseCommand):
    help = 'Create random users'

    def add_arguments(self, parser):
        parser.add_argument('total', type=int,
                            help='Indicates the number of users to be created')

    def handle(self, *args, **kwargs):
        seeder = Seed.seeder()
        seeder.add_entity(User, kwargs['total'],  {'username': lambda x: seeder.faker.user_name(),
                                                   'fullname': lambda x: seeder.faker.name(),
                                                   'email': lambda x: seeder.faker.email(),
                                                   'profile': lambda x: seeder.faker.image_url(),
                                                   'password': lambda x: make_password("password"),
                                                   'student_id': lambda x: seeder.faker.random_number(digits=8),
                                                   'phone': lambda x: seeder.faker.phone_number(),
                                                   'gender': lambda x: seeder.faker.random_element(elements=('Male', 'Female')),
                                                   'faculty': lambda x: seeder.faker.word(),
                                                   'major': lambda x: seeder.faker.word(),
                                                   'year': lambda x: seeder.faker.random_int(min=1, max=4),
                                                   'gpa': lambda x: seeder.faker.pyfloat(left_digits=2, right_digits=2, positive=True),
                                                   'gpax': lambda x: seeder.faker.pyfloat(left_digits=2, right_digits=2, positive=True),
                                                   'advisor': lambda x: seeder.faker.name(),
                                                   'birth_date': lambda x: seeder.faker.date_of_birth(minimum_age=18, maximum_age=30),
                                                   'culture': lambda x: seeder.faker.word()}
                          )

        seeder.execute()
