import prisma from '../../prisma/prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser } from './userController.js';

export const signUp = async (req,res) => {
 
  createUser(req,res);

};

export const login = async (req,res) => {
  const { email, password } = req.body;
  console.log(email, password)

  if (!email || !password) {
    req.status(400).json('Email and password are required');
    console.log("Email and password are required");
    return;
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log("User in login: ",user)
  if (!user) {
    res.status(400).json('User not found');
    console.log("User not found")
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  
  if (!isPasswordValid) {
    res.status(401).json('Invalid password');
    console.log("Invalid password")
    return;
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET , {
    expiresIn: '1h',
  });

  res.status(200).json({
    user:{
      id: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      createdAt: user.createdAt
    },
    accessToken: token
  });
};
