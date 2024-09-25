import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const sharedSymmetricKey = 'secret';
const issuerValue = 'http://localhost:3000';
const audienceValue = 'http://localhost:3000/api';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token is missing or invalid' });
  }

  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, sharedSymmetricKey, {
      algorithms: ['HS256'],
      issuer: issuerValue,
      audience: audienceValue,
    });
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token is invalid or expired' });
  }
};
