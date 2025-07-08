from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates

from config import db, bcrypt

class Vehicle(db.Model, SerializerMixin):
    __tablename__ = 'vehicles'

    id = db.Column(db.Integer, primary_key= True)
    make = db.Column(db.String)
    model = db.Column(db.String)
    year = db.Column(db.Integer)
    vehicle_img = db.Column(db.String)

    #Add relationship
    bookings = db.relationship('Booking', back_populates='vehicle', cascade='all, delete-orphan')

    #serialization rules
    serialize_rules = ('-bookings.vehicle',)

    def __repr__(self):
        return f"<Vehicle {self.id}: {self.make} {self.model} {self.year}>"

class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'
    id = db.Column(db.Integer, primary_key= True)
    username = db.Column(db.String)
    _password_hash = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String) 
    last_name = db.Column(db.String)
    dob = db.Column(db.String, nullable=False)
    address = db.Column(db.String)
    city = db.Column(db.String)
    state = db.Column(db.String)
    zipcode = db.Column(db.Integer)
    

    #Add relationship
    bookings = db.relationship('Booking', back_populates='customer', cascade='all, delete')

    #serialization rules
    serialize_rules = ('-bookings.customer',)

    @hybrid_property
    def password_hash(self):
        AttributeError("Password hash may not be viewed!")

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')
    
    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8')
        )
    
    def __repr__(self):
        return f"<Customer {self.id}: {self.first_name} {self.last_name} ({self.age})"

class Booking(db.Model, SerializerMixin):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key= True)
    check_in = db.Column(db.Time)
    check_out = db.Column(db.Time)
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