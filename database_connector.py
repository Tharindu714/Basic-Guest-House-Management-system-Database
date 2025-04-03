import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="hotel_db"
)
cursor = conn.cursor()
cursor.execute("SELECT * FROM customers")
for row in cursor.fetchall():
    print(row)