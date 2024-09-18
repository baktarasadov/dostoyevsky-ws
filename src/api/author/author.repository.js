import { BaseRepository } from "@/shared/repository/base.repository";

import Author from "./model/author.mode";

export class AuthorRepository extends BaseRepository {
  constructor() {
    super(Author);
  }
}
