import { StatusCodes } from "http-status-codes";

import { AuthDto } from "./dto/auth.dto";

export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async register(request, response) {
    const data = await this.authService.register(request.body);

    response.success({
      message: "Registration successful. Please verify your email.",
      status: StatusCodes.CREATED,
      data: new AuthDto(data),
    });
  }

  async login(request, response) {
    const user = await this.authService.login(request.body);

    response.success({
      message: "User Login successful",
      status: StatusCodes.OK,
      data: new AuthDto(user),
    });
  }
}
