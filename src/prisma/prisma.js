//created to avoid many instances
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import {PrismaClient} from '../generated/prisma/client.ts';

const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
const prisma = new PrismaClient({adapter});

export default prisma;