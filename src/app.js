import "@/core/di/di-globals";
import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";

import authRouter from "./api/auth/auth.route";
import authorRouter from "./api/author/author.route";
import genreRouter from "./api/genre/genre.route";
import publisherRouter from "./api/publisher/publisher.route";
import { apiPrefix } from "./common/constant/api";
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
app.use(apiPrefix, authRouter);
app.use(apiPrefix, authorRouter);
app.use(apiPrefix, genreRouter);
app.use(apiPrefix, publisherRouter);

app.use(errorHandlerMiddleware);

export default app;
