import { roleDIKeys } from "@/api/role/role.di";
import { RoleSeeder } from "@/api/role/role.seeder";

import { container } from "../di/di-container";

export const seed = async () => {
  const roleSeeder = new RoleSeeder(container.get(roleDIKeys.repository));

  await roleSeeder.createRoles();
};
