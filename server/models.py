from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

class Vehicle(db.Model, SerializerMixin):
    __tablename__ = 'vehicles'

    id = db.Column(db.Integer, primary_key= True)
    make = db.Column(db.String)
    model = db.Column(db.String)
    year = db.Column(db.Integer)

    #Add relationship
    bookings = db.relationship('Booking', back_populates='vehicle', cascade='all, delete-orphan')

    #serialization rules
    serialize_rules = ('-bookings.vehicle',)

    def __repr__(self):
        return f"<Vehicle {self.id}: {self.make} {self.model} {self.year}>"

class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'
    id = db.Column(db.Integer, primary_key= True)
    first_name = db.Column(db.String) 
    last_name = db.Column(db.String)
    age = db.Column(db.Integer)
    

    #Add relationship
    bookings = db.relationship('Booking', back_populates='customer', cascade='all, delete')

    #serialization rules
    serialize_rules = ('-bookings.customer',)

    def __repr__(self):
        return f"<Customer {self.id}: {self.first_name} {self.last_name} ({self.age})"

class Booking(db.Model, SerializerMixin):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key= True)
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicles.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    
    #Add relationship
    vehicle = db.relationship('Vehicle', back_populates='bookings')
    customer = db.relationship('Customer', back_populates='bookings')

    #serialization rules
    serialize_rules= ('-vehicle.bookings', '-customer.bookings',)

    def __repr__(self):
        return f"<Booking {self.id}>"