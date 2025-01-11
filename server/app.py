#!/usr/bin/env python3

from flask import make_response, jsonify, request
from flask_restful import Resource

from config import db, app, api

from models import Vehicle, Customer, Booking

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

class Customers(Resource):
    def get(self):
        customers = Customer.query.all()

        customer_dict = [customer.to_dict(rules=('-bookings',)) for customer in customers]

        response = make_response(
            jsonify(customer_dict), 200
        )

        return response
    
    def post(self):
        json = request.get_json()

        try:
            customer = Customer(
                first_name = json["first_name"],
                last_name = json["last_name"],
                age = json["age"]
            )

            db.session.add(customer)
            db.session.commit()

            response_dict = customer.to_dict(rules=('-bookings',))

            return make_response(response_dict, 201)
        except:
            return {'errors': ['validation errors']}, 400
        
api.add_resource(Customers, '/customers')

class CustomersByID(Resource):
    def get(self, id):
        customer = Customer.query.filter(Customer.id == id).first()

        if customer == None:
            return {"error": "Customer not found"}, 404
        return make_response(customer.to_dict(), 200)
    
    def patch(self, id):
        json = request.get_json()
        customer = Customer.query.filter(Customer.id == id).first()

        if customer == None:
            return {"error" : "Customer not found"}, 404
        
        try:
            for attr in json:
                setattr(customer, attr, json[attr])

                db.session.add(customer)
                db.session.commit()

            response_dict = customer.to_dict(rules=('-bookings',))

            return make_response(response_dict, 202)
        except:
            return {'errors': ['validation errors']}, 400

api.add_resource(CustomersByID, '/customers/<int:id>')

if __name__== "__main__":
    app.run(port=5555, debug=True)
     