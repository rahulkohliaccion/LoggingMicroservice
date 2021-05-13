export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
        name: process.env.DATABASE_NAME || 'logs',
        host: process.env.DATABASE_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
    },
});

export interface DatabaseConfig {
    name: string;
    host: string;
    port: number;
    username: string;
    password: string;
}
