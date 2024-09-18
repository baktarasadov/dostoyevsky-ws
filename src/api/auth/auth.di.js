import { container } from "@/core/di/di-container";

import { userDIKeys } from "../user/user.di";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export const authDIKeys = {
  controller: "auth-controller",
  service: "auth-service",
};

container.register(
  authDIKeys.service,
  [userDIKeys.service],
  (userService) => new AuthService(userService),
);

container.register(
  authDIKeys.controller,
  [authDIKeys.service],
  (authService) => new AuthController(authService),
);
