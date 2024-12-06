import { container } from "@/core/di";
import express from "express";

import { publisherDIKeys } from "./publisher.di";

const publisherRouter = express.Router();

const prefix = "/publishers";

const publisherController = container.get(publisherDIKeys.controller);

publisherRouter.post(`${prefix}`, (req, res) =>
  publisherController.create(req, res),
);

publisherRouter.get(`${prefix}`, (req, res) =>
  publisherController.findAll(req, res),
);

publisherRouter.get(`${prefix}/:publisherId`, (req, res) =>
  publisherController.findById(req, res),
);

publisherRouter.delete(`${prefix}/:publisherId`, (req, res) =>
  publisherController.delete(req, res),
);
publisherRouter.patch(`${prefix}/:publisherId`, (req, res) =>
  publisherController.update(req, res),
);

export default publisherRouter;
