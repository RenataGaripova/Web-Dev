import os
import django
import json
from models import Product

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_project.settings')
django.setup()


with open('api/products.json') as f:
    productss_data = json.load(f)


products_items = [Product(**p) for p in productss_data]


Product.objects.bulk_create(products_items)