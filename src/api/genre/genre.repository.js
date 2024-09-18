import { BaseRepository } from "@/shared/repository/base.repository";

import Genre from "./model/genre.mode";

export class GenreRepository extends BaseRepository {
  constructor() {
    super(Genre);
  }
}
