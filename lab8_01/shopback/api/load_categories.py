import os
import django
import json
from api.models import Category

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_project.settings')
django.setup()

with open('api/categories.json') as f:
    categories_data = json.load(f)


categories_items = [Category(**c) for c in categories_data]


Category.objects.bulk_create(categories_items)