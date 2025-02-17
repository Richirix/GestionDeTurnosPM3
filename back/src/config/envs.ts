import "dotenv/config";

export const PORT:number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export const DB_TYPE = "postgres"
export const DB_HOST: string | undefined = process.env.DB_HOST
export const DB_PORT: number | undefined = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10): undefined
export const DB_USERNAME: string | undefined = process.env.DB_USERNAME
export const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD
export const DB_NAME: string | undefined = process.env.DB_NAME
export const DB_SYNC: boolean = process.env.SYNC ? process.env.SYNC === "true" : true
export const DB_LOGGING: boolean = process.env.LOGGING ? process.env.LOGGING === "false" : false
export const DB_ENTITIES: string [] = process.env.DB_ENTITIES ? process.env.DB_ENTITIES.split(",") : ["src/entities/**/*.ts"]
export const DB_DROP: boolean = process.env.DB_DROP ? process.env.DB_DROP === "false": true