<?php
$conn = new mysqli("localhost", "root", "password", "hotel_db");
$result = $conn->query("SELECT * FROM bookings");

while ($row = $result->fetch_assoc()) {
    echo "Booking ID: " . $row["id"] . "<br>";
}
?>
