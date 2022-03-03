import bcrypt from 'bcryptjs';

// hashing pwd using bcrypt

const users = [
    {
        name: "Admin User",
        email: "admin@proshop.com",
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: "Dummy User1",
        email: "duser1@proshop.com",
        password: bcrypt.hashSync('12345', 10),
    },
    {
        name: "Dummy User2",
        email: "duser2@proshop.com",
        password: bcrypt.hashSync('12345', 10),
    }
];

export default users;