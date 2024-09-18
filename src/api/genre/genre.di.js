import { container } from "@/core/di/di-container";

import { GenreController } from "./genre.controller";
import { GenreRepository } from "./genre.repository";
import { GenreService } from "./genre.service";

export const genreDIKeys = {
  service: "genre-service",
  repository: "genre-repository",
  controller: "genre-controller",
};

container.register(genreDIKeys.repository, [], () => new GenreRepository());

container.register(
  genreDIKeys.service,
  [genreDIKeys.repository],
  (genreRepository) => new GenreService(genreRepository),
);

container.register(
  genreDIKeys.controller,
  [genreDIKeys.service],
  (genreService) => new GenreController(genreService),
);
