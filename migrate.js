const { createDb, migrate } = require("postgres-migrations");
require('dotenv').config();


async function run() {
    const dbConfig = {
        database: process.env.POSTGRES_DB,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: "localhost",
        port: 5432,
    }

    await createDb(process.env.POSTGRES_DB, {
        ...dbConfig,
        defaultDatabase: process.env.POSTGRES_DB,
    });
    await migrate(dbConfig, "./migrations")
};

run();