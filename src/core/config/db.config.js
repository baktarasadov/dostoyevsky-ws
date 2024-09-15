import { Sequelize } from "sequelize";

class Database {
  static instance = null;

  constructor() {
    // If an instance already exists, prevent creating a new one
    if (Database.instance) {
      throw new Error(
        "Database instance already exists. Use Database.getInstance() instead.",
      );
    }
  }

  // Method to get the Singleton instance of Sequelize
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Sequelize({
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
      });
    }

    return Database.instance;
  }

  // Method to open the database connection
  static async connect() {
    try {
      const sequelize = Database.getInstance();
      await sequelize.authenticate();
      await sequelize.sync({ force: false });
      console.log("Successfully connected to the database.");
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw new Error("Unable to connect to the database");
    }
  }

  // Method to close the database connection
  static async close() {
    try {
      if (Database.instance) {
        await Database.instance.close();
        console.log("Database connection successfully closed.");
      }
    } catch (error) {
      console.error("Error closing the database connection:", error);
    }
  }
}

const sequelize = Database.getInstance();

export { Database, sequelize };
