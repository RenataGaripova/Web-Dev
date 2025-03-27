import os
import django
import json
from api.models import Product

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_project.settings')
django.setup()

with open('api/products.json') as f:
    products_data = json.load(f)


products_items = [Product(**p) for p in products_data]


Product.objects.bulk_create(products_items)