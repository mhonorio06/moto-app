from random import choice as rc
from faker import Faker
from faker_vehicle import VehicleProvider
import datetime

from app import app
from models import db, Vehicle, Customer, Booking


fake = Faker()

fake.add_provider(VehicleProvider)


def create_vehicles():
    vehicles = []
    for _ in range(5):
        v = Vehicle(
            make = fake.vehicle_make(),
            model = fake.vehicle_model(),
            year = fake.vehicle_year()
        )
        vehicles.append(v)
    return vehicles
    

def create_customers():
    customers = []
    for _ in range(5):
        c = Customer(
            first_name =fake.first_name(),
            last_name = fake.last_name(),
            age = rc(range(21, 65))
        )
        customers.append(c)
    return customers

def create_bookings(customers, vehicles):
    bookings = []
    for _ in range(5):
        b = Booking(
            start_date = datetime.date(2025,1,1),
            end_date = datetime.date(2026,1,1),
            vehicle_id = rc([vehicle.id for vehicle in vehicles]),
            customer_id = rc([customer.id for customer in customers])
        )
        bookings.append(b)
    return bookings

if __name__ == '__main__':
    
    with app.app_context():
        print('Clearing database...')
        Vehicle.query.delete()
        Customer.query.delete()
        Booking.query.delete()

        print('Seeding Vehicles...')
        vehicles = create_vehicles()
        db.session.add_all(vehicles)
        db.session.commit()

        print("Seeding Customers...")
        customers = create_customers()
        db.session.add_all(customers)
        db.session.commit()

        print("Seeding Bookings...")
        bookings = create_bookings(vehicles, customers)
        db.session.add_all(bookings)
        db.session.commit()

        print("Seed data completed...")
