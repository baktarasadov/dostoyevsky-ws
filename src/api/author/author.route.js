import { container } from "@/core/di/di-container";
import express from "express";

import { authorDIKeys } from "./author.di";

const authorRouter = express.Router();

const prefix = "/authors";

const authorController = container.get(authorDIKeys.controller);

authorRouter.post(`${prefix}`, (req, res) => authorController.create(req, res));

authorRouter.get(`${prefix}`, (req, res) => authorController.findAll(req, res));

authorRouter.get(`${prefix}/:authorId`, (req, res) =>
  authorController.findById(req, res),
);

authorRouter.delete(`${prefix}/:authorId`, (req, res) =>
  authorController.delete(req, res),
);
authorRouter.patch(`${prefix}/:authorId`, (req, res) =>
  authorController.update(req, res),
);

export default authorRouter;
