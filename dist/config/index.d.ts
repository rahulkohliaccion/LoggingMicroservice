declare const _default: () => {
    port: number;
    database: {
        name: string;
        host: string;
        port: number;
        username: string;
        password: string;
    };
};
export default _default;
export interface DatabaseConfig {
    name: string;
    host: string;
    port: number;
    username: string;
    password: string;
}
