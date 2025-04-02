# Basic-Guest-House-Management-system-Database

## Overview
This repository contains a MySQL database script for a hotel management system. The script creates and populates a database named `hotel_db`, which is designed to handle various aspects of hotel operations, such as managing cities, customers, rooms, bookings, and payments.

## Features
- **City Management:** Stores information about different cities.
- **Customer Records:** Keeps track of customer details.
- **Room Information:** Defines room types, availability, and pricing.
- **Booking System:** Manages reservations and bookings.
- **Payment Processing:** Records transactions related to bookings.

## Installation
### Prerequisites
- MySQL Server (version 8.0 or later recommended)
- MySQL Workbench or any MySQL-compatible client

### Steps
1. Clone this repository:
   ```sh
   git clone https://github.com/your-repo/hotel-management-db.git
   cd hotel-management-db
   ```
2. Open MySQL Workbench (or any MySQL client).
3. Execute the script `Hotel_system_db_example.sql`:
   ```sh
   SOURCE path/to/Hotel_system_db_example.sql;
   ```
4. Verify that the `hotel_db` database has been created successfully:
   ```sql
   SHOW DATABASES;
   ```
## Database Schema
The database consists of multiple tables, including:

- **`city`**: Stores city names and identifiers.
- **`customer`**: Contains customer details such as name, contact, and address.
- **`room`**: Defines room details like type, availability, and pricing.
- **`booking`**: Manages hotel bookings with customer and room references.
- **`payment`**: Tracks payments and transactions related to bookings.

## Usage
Once the database is set up, you can interact with it using SQL queries. Examples:

- **View available rooms:**
  ```sql
  SELECT * FROM room WHERE availability = 'available';
  ```
- **List all bookings for a customer:**
  ```sql
  SELECT * FROM booking WHERE customer_id = 1;
  ```
- **Insert a new customer:**
  ```sql
  INSERT INTO customer (name, contact, address) VALUES ('John Doe', '123-456-7890', '123 Main St');
  ```
## Contributing
If you would like to contribute, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## Contact
For any issues or suggestions, please open an issue in the repository.
