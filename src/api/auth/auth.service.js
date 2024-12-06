import { config } from "@/core/config/jwt.config";
import { BaseResponse } from "@/core/response/base-response";
import { StatusCodes } from "http-status-codes";

import { comparePassword } from "../../common/helper/hash-password";
import { generateToken } from "../../common/helper/jwt-token";
import Contact from "../../common/schema/model/contact-model.schema";
import { APIError } from "../../shared/error-response/error-response";

export class AuthService {
  constructor(userService) {
    this.userService = userService;
  }

  async register(authRegisterDto) {
    const { fullName } = authRegisterDto;

    const { email } = authRegisterDto.contact;
    console.log(authRegisterDto);

    const existingUser = await this.userService.findOne({
      where: { fullName, contact: { email } },
      include: [Contact],
    });

    if (existingUser) {
      throw new APIError(
        `A user with the name "${fullName}" and email "${email}" already exists.`,
        StatusCodes.CONFLICT,
      );
    }

    authRegisterDto.role = 2;

    const savedUser = await this.userService.create(authRegisterDto);

    const payload = {
      sub: savedUser._id,
      email: savedUser.email,
    };

    const token = await this.createToken(payload);

    return { user: savedUser, token };
  }

  async login(authloginDto) {
    const { email, password } = authloginDto;

    const existingUser = await this.userService.findByEmail(email);

    if (
      !existingUser ||
      !(await comparePassword(password, existingUser.password))
    ) {
      throw new BaseResponse.error({
        message: "Email or Password is incorrect.",
        status: StatusCodes.UNAUTHORIZED,
      });
    }

    const payload = {
      sub: existingUser._id,
      email,
    };

    const token = await this.createToken(payload);

    return { user: existingUser, token };
  }

  async createToken(payload) {
    const { accessSecret, accessExpiresIn } = config.jwt;

    const accessToken = await generateToken(
      payload,
      accessSecret,
      accessExpiresIn,
    );

    return { accessToken };
  }

  async createVerificationToken(payload) {
    const { verificationExpiresIn, verificationSecret } = config.jwt;

    return generateToken(payload, verificationSecret, verificationExpiresIn);
  }
}
