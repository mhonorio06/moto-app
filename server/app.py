#!/usr/bin/env python3

from flask import make_response, jsonify, request, session
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from config import db, app, api

from models import Vehicle, Customer, Booking

# @app.before_request
# def check_if_logged_in():
#     access_list = [
#         'signup',
#         'login',
#         'check_session'
#     ]
#     if (request.endpoint) not in access_list and (not session.get('customer_id')):
#         return {"error" : "401 Unauthorized"}, 401

@app.route('/')
def index():
    return '<h1>Moto-Lease-App</h1>'

class Vehicles(Resource):
    def get(self):
        vehicles = Vehicle.query.all()

        vehicle_dict = [vehicle.to_dict(rules=('-bookings',)) for vehicle in vehicles ]

        response = make_response(
            jsonify(vehicle_dict),200
            )

        return response

api.add_resource(Vehicles, '/vehicles')

class VehicleByID(Resource):
    def get(self, id):
        vehicle = Vehicle.query.filter(Vehicle.id == id).first()

        if vehicle == None:
            return {'error' : 'Vehicle not found'}, 404
        return make_response(
            vehicle.to_dict(rules= ('-bookings',)), 200
        )

api.add_resource(VehicleByID, '/vehicles/<int:id>')

class Signup(Resource):
    
    def post(self):
        json = request.get_json()

        customer = Customer(
            username = json['username'],
            first_name = json['first_name'],
            last_name = json['last_name'],
            dob = json['dob'],
            address = json['address'],
            city = json['city'],
            state = json['state'],
            zipcode = json['zipcode']
        )
        customer.password_hash = json['password']

        try :
            db.session.add(customer)
            db.session.commit()

            session['customer_id'] = customer.id

            return customer.to_dict(), 201
        
        except IntegrityError:

            return {'error' : '422 Unprocessable'}, 422

class Login(Resource):
    def post(self):
        json = request.get_json()

        username = json['username'],
        password = json['password']

        customer = Customer.query.filter(Customer.username == username).first()

        if customer:
            if customer.authenticate(password):
                session['customer_id'] = customer.id
                return customer.to_dict(), 200

class Logout(Resource):
    def delete(self):
        session['customer_id'] = None

        return {}, 204

class CheckSession(Resource):
    def get(self):
        customer = Customer.query.filter(Customer.id == session['customer_id']).first()

        return customer.to_dict(), 200
    
api.add_resource(Login, '/login', endpoint = 'login')
api.add_resource(Logout, '/logout', endpoint = 'logout')
api.add_resource(Signup, '/signup', endpoint = 'signup')
api.add_resource(CheckSession, '/check_session', endpoint = 'check_session')

if __name__== "__main__":
    app.run(port=5555, debug=True)
     