import { BaseRepository } from "@/shared/repository/base.repository";

import Role from "./model/role.model";

export class RoleRepository extends BaseRepository {
  constructor() {
    super(Role);
  }
}
