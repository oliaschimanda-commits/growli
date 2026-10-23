import prisma from '../../prisma/prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser } from './userController.js';

export const signUp = async (req,res) => {
 
  createUser(req,res);

};

export const login = async (req,res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    req.status = 400;
    return { error: 'Email and password are required' };
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    res.status = 404;
    return { error: 'User not found' };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status = 401;
    return { error: 'Invalid password' };
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '1h',
  });

  return { token };
};
