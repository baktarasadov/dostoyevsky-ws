import { BaseRepository } from "@/shared/repository/base.repository";

import User from "./model/user.model";

export class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}
