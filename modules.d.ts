declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    PORT: number;
    MONGO_URL: string;
    JWT_SECRET_KEY: string;
  }
}
