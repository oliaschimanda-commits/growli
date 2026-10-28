import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import auth from '../routes/auth.js';
import farming from '../routes/farming.js';
import product from '../routes/product.js';
import training from '../routes/training.js';
import users from '../routes/users.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.SERVER_PORT || 3000;

app.use('/',auth)
app.use('/farminginfo',farming)
app.use('/product',product)
app.use('/training',training)
app.use('/user',users)


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
