import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import httpStatus from 'http-status';

const app = express();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json('OK')
})

export default app;