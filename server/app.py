from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)

# Database setup
client = MongoClient('mongodb://localhost:27017/')
db = client.lyn
products_collection = db.products

# Fetch all products
@app.route('/products', methods=['GET'])
def get_products():
    products = list(products_collection.find())
    for product in products:
        product['_id'] = str(product['_id'])
    return jsonify(products)

# Add a new product
@app.route('/products', methods=['POST'])
def add_product():
    data = request.json
    new_product = {
        "name": data.get("name"),
        "price": data.get("price"),
        "stock": data.get("stock"),
        "description": data.get("description"),
        "imageURL": data.get("imageURL"),
    }
    products_collection.insert_one(new_product)
    return jsonify({"message": "Product added successfully"}), 201

@app.route('/products/<id>', methods=['GET'])
def get_product(id):
    try:
        # Fetch product from MongoDB using the ObjectId
        product = products_collection.find_one({"_id": ObjectId(id)})
        
        if product:
            # Prepare the product data for JSON response
            product_data = {
                "_id": str(product["_id"]),
                "name": product["name"],
                "price": product["price"],
                "stock": product["stock"],
                "description": product["description"],
                "imageURL": product["imageURL"]
            }
            return jsonify(product_data), 200
        else:
            return jsonify({"error": "Product not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Update a product by ID
@app.route('/products/<id>', methods=['PUT'])
def update_product(id):
    data = request.json
    updated_product = {
        "name": data.get("name"),
        "price": data.get("price"),
        "stock": data.get("stock"),
        "description": data.get("description"),
        "imageURL": data.get("imageURL"),
    }
    products_collection.update_one({"_id": ObjectId(id)}, {"$set": updated_product})
    return jsonify({"message": "Product updated successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
