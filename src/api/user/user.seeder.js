export class UserSeeder {
  constructor(userService) {
    this.userService = userService;
  }

  async createAdmin() {
    const data = await this.userService.find({ role: 1 });

    if (!data) {
      const admin = await this.userService.create({
        contact: { email: "baktaradmin@gmail.com" },
        fullName: "baktar admin",
        password: "baktaradmin",
        role: 1,
      });

      return admin;
    }

    return null;
  }
}
