import { container } from "@/core/di/di-container";

import { RoleRepository } from "./role.repository";
import { RoleSeeder } from "./role.seeder";

export const roleDIKeys = {
  repository: "role-repository",
  seeder: "role-seeder",
};

container.register(roleDIKeys.repository, [], () => new RoleRepository());

container.register(
  roleDIKeys.seeder,
  [roleDIKeys.repository],
  (roleRepository) => new RoleSeeder(roleRepository),
);
