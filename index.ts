
import express from 'express';
//import logger from 'morgan';
import bodyParser from 'body-parser';
import Routes from './routes';
import { connect } from 'mongoose';

const PORT = process.env.PORT || 3000;
const app = express();

//app.use(logger('dev'));
app.use(bodyParser.json());

Routes.configure(app);


async function start() {
    await connect('mongodb://localhost');
  
    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`);
    });
    
  }
start().catch(err => console.log(err));;