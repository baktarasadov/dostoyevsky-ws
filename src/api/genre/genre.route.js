import { container } from "@/core/di/di-container";
import express from "express";

import { genreDIKeys } from "./genre.di";

const genreRouter = express.Router();

const prefix = "/genres";

const genreController = container.get(genreDIKeys.controller);

genreRouter.post(`${prefix}`, (req, res) => genreController.create(req, res));

genreRouter.get(`${prefix}`, (req, res) => genreController.findAll(req, res));

genreRouter.get(`${prefix}/:genreId`, (req, res) =>
  genreController.findById(req, res),
);

genreRouter.delete(`${prefix}/:genreId`, (req, res) =>
  genreController.delete(req, res),
);
genreRouter.patch(`${prefix}/:genreId`, (req, res) =>
  genreController.update(req, res),
);

export default genreRouter;
