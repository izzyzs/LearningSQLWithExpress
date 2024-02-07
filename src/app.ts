import express, {Express, Request, Response} from 'express';
import dotenv from "dotenv";
import router from './routes/tutorial.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(router);
