import { AppDataSource } from "./data-source"
import { Produto } from "./entity/Produto"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const produto = new Produto()
    produto.id = 1
    produto.nome = "Saw"
    await AppDataSource.manager.save(produto)
    console.log("Saved a new user with id: " + produto.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Produto)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
