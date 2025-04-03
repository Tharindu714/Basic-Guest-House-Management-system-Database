MySqlConnection conn = new MySqlConnection("Server=localhost;Database=hotel_db;Uid=root;Pwd=password;");
conn.Open();
MySqlCommand cmd = new MySqlCommand("SELECT * FROM guests", conn);
MySqlDataReader reader = cmd.ExecuteReader();
while (reader.Read()) {
    Console.WriteLine(reader["name"]);
}
