Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/hotel_db", "root", "password");
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM employees");
while (rs.next()) {
    System.out.println(rs.getString("name"));
}
