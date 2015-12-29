import pytest
from app import create_app, db
from app.models import Item

def test_item_table_exists():
    item = Item()
    assert item

def test_item_repr():
    item = Item(id=1)
    assert item.__repr__() == '<Item id=1>'
    
def test_create_new_item():
    valueText = "User shall be able to log in"
    someItem = Item(id=2, value=valueText)
    assert someItem.id == 2
    assert someItem.value == valueText
