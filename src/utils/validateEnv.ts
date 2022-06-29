import { cleanEnv, port, str } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    MONGO_URL: str(),
    JWT_SECRET_KEY: str()
  })
}

export default validateEnv;