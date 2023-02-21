import './database'
import cors from 'cors'
import express from 'express'

const app = express()
import routes from './routes/index.routes'

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(routes);

app.listen(app.get('port'),console.log('server andando joya'));
