import './database';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import indexRoutes from './routes/index.routes'
import usersRoutes from './routes/users.routes'



const app = express()
config()


app.set('port', process.env.PORT || 4000);

// middlewares  
app.use(cors());
app.use(express.json())


app.use(indexRoutes);
app.use(usersRoutes);



app.listen(app.get('port'), console.log('server andando joya'));
