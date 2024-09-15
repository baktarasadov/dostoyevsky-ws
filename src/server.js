import "@/core/config/env.config";
import "express-async-errors";
import { createServer } from "http";

import app from "./app";
import { connectToDatabase } from "./core/config/db.config";

const server = createServer(app);
const { PORT } = process.env;

(async () => {
  await connectToDatabase();

  server.listen(PORT, async () => {
    console.log(`Server is running: http://localhost:${PORT}`);
  });
})();
