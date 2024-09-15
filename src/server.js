import "@/core/config/env.config";
import "express-async-errors";
import { createServer } from "http";

import app from "./app";

const server = createServer(app);
const { PORT } = process.env;

(async () => {
  server.listen(PORT, async () => {
    console.log(`Server is running: http://localhost:${PORT}`);
  });
})();
