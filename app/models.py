from app import db

class Item(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.String(512), index=True)
    
    
    def __repr__(self):
        return '<Item id=%r>' % self.id