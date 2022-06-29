import app from './app';
import validateEnv from './utils/validateEnv';
import http from 'http'
import { config } from 'dotenv';
import mongoose from 'mongoose';
import { MONGO_URL } from './config';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

validateEnv();

let server: http.Server;

mongoose.connect(MONGO_URL).then(() => {
  console.log('Connected to MongoDB...')
  server = app.listen(3000, () => {
    console.log('API is now online on port 3000')
  })
})

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});