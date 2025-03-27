from django.db import models

# Create your models here.


class Product(models.Model):

    category_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    def __str__(self):
        return f"{self.name} - {self.price}"

    def to_json(self):
        return {
            "id": self.id,
            "category_name": self.category_name,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "count": self.count,
            "is_active": self.is_active,
        }
    
    class Meta:
        app_label = 'api' 
    
    
class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
        }

    class Meta:
        app_label = 'api' 
