import { container } from "@/core/di";

import { RoleRepository } from "./role.repository";
import { RoleSeeder } from "./role.seeder";

export const roleDIKeys = {
  repository: "role-repository",
  seeder: "role-seeder",
  service: "role-service",
};

container.register(roleDIKeys.repository, [], () => new RoleRepository());

container.register(
  roleDIKeys.seeder,
  [roleDIKeys.repository],
  (roleRepository) => new RoleSeeder(roleRepository),
);
