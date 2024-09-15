import "@/core/di/di-globals";
import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";

import baseResponseMiddleware from "./core/middleware/base-response.middleware";
import errorHandlerMiddleware from "./core/middleware/error-handler-middleware";

const app = express();

app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-6",
    legacyHeaders: false,
    message: "Too many requests",
  }),
);
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.disable("x-powered-by");
app.use(baseResponseMiddleware);

app.use(errorHandlerMiddleware);

export default app;
