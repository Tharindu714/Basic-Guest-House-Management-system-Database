const { ApolloServer, gql } = require('apollo-server');
const mysql = require('mysql2/promise');

// Database Connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'hotel_db'
});

// GraphQL Schema
const typeDefs = gql`
    type Room {
        id: ID!
        type: String!
        price: Float!
        status: String!
    }

    type Guest {
        id: ID!
        name: String!
        email: String!
        phone: String!
    }

    type Booking {
        id: ID!
        guest: Guest!
        room: Room!
        check_in: String!
        check_out: String!
    }

    type Query {
        rooms: [Room]
        guests: [Guest]
        bookings: [Booking]
    }

    type Mutation {
        addGuest(name: String!, email: String!, phone: String!): Guest
        addBooking(guest_id: ID!, room_id: ID!, check_in: String!, check_out: String!): Booking
    }
`;

// GraphQL Resolvers
const resolvers = {
    Query: {
        rooms: async () => {
            const [rows] = await db.query("SELECT * FROM rooms");
            return rows;
        },
        guests: async () => {
            const [rows] = await db.query("SELECT * FROM guests");
            return rows;
        },
        bookings: async () => {
            const [rows] = await db.query(`
                SELECT bookings.id, check_in, check_out, 
                       guests.id AS guest_id, guests.name, guests.email, guests.phone,
                       rooms.id AS room_id, rooms.type, rooms.price, rooms.status
                FROM bookings
                JOIN guests ON bookings.guest_id = guests.id
                JOIN rooms ON bookings.room_id = rooms.id
            `);
            return rows.map(row => ({
                id: row.id,
                check_in: row.check_in,
                check_out: row.check_out,
                guest: {
                    id: row.guest_id,
                    name: row.name,
                    email: row.email,
                    phone: row.phone
                },
                room: {
                    id: row.room_id,
                    type: row.type,
                    price: row.price,
                    status: row.status
                }
            }));
        }
    },
    Mutation: {
        addGuest: async (_, { name, email, phone }) => {
            const [result] = await db.query("INSERT INTO guests (name, email, phone) VALUES (?, ?, ?)", [name, email, phone]);
            return { id: result.insertId, name, email, phone };
        },
        addBooking: async (_, { guest_id, room_id, check_in, check_out }) => {
            const [result] = await db.query("INSERT INTO bookings (guest_id, room_id, check_in, check_out) VALUES (?, ?, ?, ?)", [guest_id, room_id, check_in, check_out]);
            return { id: result.insertId, guest_id, room_id, check_in, check_out };
        }
    }
};

// Start Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
