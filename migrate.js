import { createDb, migrate } from "postgres-migrations"

async function run() {
    const dbConfig = {
        database: "database-name",
        user: "postgres",
        password: "password",
        host: "localhost",
        port: 5432,
    }

    await createDb(databaseName, {
        ...dbConfig,
        defaultDatabase: "postgres", // defaults to "postgres"
    })
    await migrate(dbConfig, "/migrations")
};

run();