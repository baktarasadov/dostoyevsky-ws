import { container } from "@/core/di";

import { AuthorController } from "./author.controller";
import { AuthorRepository } from "./author.repository";
import { AuthorService } from "./author.service";

export const authorDIKeys = {
  service: "author-service",
  repository: "author-repository",
  controller: "author-controller",
};

container.register(authorDIKeys.repository, [], () => new AuthorRepository());

container.register(
  authorDIKeys.service,
  [authorDIKeys.repository],
  (authorRepository) => new AuthorService(authorRepository),
);

container.register(
  authorDIKeys.controller,
  [authorDIKeys.service],
  (authorService) => new AuthorController(authorService),
);
