import "reflect-metadata"
import { DataSource } from "typeorm"
import { Produto } from "./entity/Produto"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "cardapio_app_backend_typeorm",
    // synchronize: true,
    synchronize: false,
    logging: false,
    entities: [Produto],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})
