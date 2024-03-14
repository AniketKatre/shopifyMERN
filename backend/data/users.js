import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true,
    },

    {
        name: 'Annie',
        email: 'annie@gmail.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: false,
    },

    {
        name: 'Stark',
        email: 'stark@gmail.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: false,
    }
];

export default users;