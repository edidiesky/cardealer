
# Building the Ultimate Car Dealer Experience Api:  A Node.js and Express.js API

Welcome to the official documentation of my car dealer api. A powerhouse of features for the modern car dealership ecosystem. This dynamic API encompasses Authentication, Authorization with JWT, Seamless Stripe Payment Integration, Advanced Order Management, and an intelligent Search and Filtering Functionality. Developed with Node.js and Express.js, the Car Dealer API revolutionizes the way dealerships manage and enhance their services. Explore the future of automotive retail technology with Car Dealer! 

## API Documentation

Explore the comprehensive API documentation to understand how to use each endpoint, request and response formats, and authentication methods. Please refer to the [API Documentation](https://app.swaggerhub.com/apis-docs/ESSIENEDIDIONG1000_1/Car_Dealer_Api/1.0.0#/) for more details.

## Features of My Car Dealer Api
- **Authentication & Authorization:** I created endpoints where users were being authenticated. Generated authentication tokens provided from jwt were not left out. which I made good use of in restricting the actions made by the clients
- **Stripe Payment Integration:** I had to integrate stripe in receing payment form the various cars that were being purchased by the user
- **Order Management:**
  I had to craete endpoints were I kept track of the state of the transaction carried out in the stripe payment system. If the stripe payment has been carried out sucessfully I update the order status to paid and many other logic were also made.
- **Search and Filters:** 
  I created functions which receives queries which allow user to filtering based on different parameters such as price, location, title, types and may more
## API Reference

### Register a new user.

```http
  POST api/v1/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Required**.User's first name |
| `lastname` | `string` | **Required**. User's last name |
| `email` | `string` | **Required**. User's email address |
| `password` | `string` | **Required**. User's password |

**Response:**
 - Status: 200 OK
 - Body:
    ```json
    {
      "user": {
        "_id": "user_id",
        "firstname": "John",
        "lastname": "Doe",
        "phone": "1234567890",
        "email": "john@example.com",
        "isAdmin": false,
        "country": "United States",
        "state": "California",
        "postalCode": "12345"
      }
    }
    ```

### Example Request

```http
POST /api/auth/register
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "phone": "1234567890",
  "country": "United States"
}

```

Register a new user with the provided details and generate an authentication token.

### Login a user.

```http
  POST api/v1/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. User's email address |
| `password` | `string` | **Required**. User's password |

**Response:**
 - Status: 200 OK
 - Body:
    ```json
    {
      "user": {
        "_id": "user_id",
        "firstname": "John",
        "lastname": "Doe",
        "phone": "1234567890",
        "email": "john@example.com",
        "isAdmin": false,
        "country": "United States",
        "state": "California",
        "postalCode": "12345"
      }
    }
    ```

Login a new user with the provided details and generate an authentication token.

### Example Request

```http
POST /api/auth/login
Content-Type: application/json

{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "phone": "1234567890",
  "country": "United States"
}

```


## Get All Products Endpoint

Retrieve a list of products ( cars products) based on specified filters and sorting options.


```http
  GET api/v1/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` |  Search by product car title |
| `sort` | `string` | Sort by "latest", "oldest", "price", or "rating". |
| `colors` | `string` |  Filter based on the color product car |
| `category` | `string` |  Filter based on the category product car |
| `tag` | `string` | Filter by product tag|
| `minprice` | `number` | Filter based on the minimum price|
| `tag` | `number` | Filter based on the maximum price|
| `limit` | `number` | Filter by car tag|
| `page` | `number` | Page number (default: 1)|


**Response:**
  - Status: 200 OK
  - Body:

    ```json
    {
      "product": [
        {
          "_id": "product_id",
          "title": "Product Title",
          "price": 99.99,
          "colors": ["Red", "Blue"],
          "category": "Electronics",
          "tag": "Featured",
          "createdAt": "2023-08-11T10:00:00.000Z",
          "rating": 4.5
          // ... other product properties
        },
        // ... more products
      ],
      "noOfPages": 5,
      "totalProduct": 73
    }

 ```


### Example Request

```http
GET /api/v1/product?search=Telsa&sort=latest&colors=Red&category=Electric Cars&limit=10&page=1
```


## Create Single Car Product Endpoint

```http
  POST api/v1/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` |  product car title |
| `price` | `string` |  product car price |


- **Headers:**
  - `Authorization` (string): Bearer token for authentication.
- **Response:**

  - Status: 200 OK
  - Body:
    ```json
    {
      "product": {
        "_id": "product_id",
        "title": "New Product Title",
        "price": 129.99,
        // ... other product properties ...
        "user": "user_id",
        "createdAt": "2023-08-11T12:00:00.000Z"
      }
    }
    ```
### Example Request

```http
POST /api/v1/product
Authorization: Bearer your_jwt_token
Content-Type: application/json

{
  "title": "New Product Title",
  "price": 129.99,
  // ... other product properties ...
}

```

## Installation and Setup

Follow these steps to set up the project locally and get it running.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)
- Git: [Download and Install Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/edidiesky/car_api.git
```

### Navigate to the Project Directory
- cd path/to/your/project/directory

### Set Up Environment Variables
- Create a .env file in the root directory of your project.
- Open the .env file using a text editor.
- Add the necessary environment variables with their values.

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

```

### Install Dependencies
- In the terminal or command prompt, ensure you are in the project directory.
- Run the following command to install the project dependencies:

```
 npm install

```## Demo

Check out the live demo of the project: [Demo Link](https://car-dealership-39vz.onrender.com/car-dealership/)


## Contact Information

If you have any questions or need further assistance, feel free to reach out to me:

- **Email:** [your.email@example.com](essienedidiong@gmail.com)
- **LinkedIn:** [Your Name](https://www.linkedin.com/in/edidiong-essien-a4b59b1a5/)
- **Twitter:** [@YourTwitterHandle](https://twitter.com/edidie)
