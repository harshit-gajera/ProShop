import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'Harshit Gajera',
    email: 'harshit@example.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'User',
    email: 'user@example.com',
    password: bcrypt.hashSync('1234 ', 10),
  },
]

export default users