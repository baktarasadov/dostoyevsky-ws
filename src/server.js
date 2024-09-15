import "@/core/config/env.config";
import "express-async-errors";
import { createServer } from "http";

import app from "./app";
import Database from "./core/config/db.config";

const server = createServer(app);
const { PORT } = process.env;

(async () => {
  try {
    await Database.connect(); // Connect to the database
    console.log("Application started...");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Application failed to start:", error.message);
    process.exit(1); // Exit with failure code
  }

  // Gracefully handle shutdown signals
  process.on("SIGINT", async () => {
    await Database.close(); // Close the database connection
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    await Database.close(); // Close the database connection
    process.exit(0);
  });
})();
