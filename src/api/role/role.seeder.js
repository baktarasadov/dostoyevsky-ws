import { roles } from "@/common/constant/role";

export class RoleSeeder {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  async createRoles() {
    try {
      const existingRoles = await this.roleRepository.findAll();
      const existingRoleNames = new Set(existingRoles.map((role) => role.role));

      const rolesToCreate = roles.filter(
        (role) => !existingRoleNames.has(role.role),
      );

      if (rolesToCreate.length > 0) {
        await this.roleRepository.createMany(rolesToCreate);
      }
    } catch (error) {
      console.error("Error creating roles:", error.message);
      // Optional: Handle or propagate the error as needed
    }
  }
}
