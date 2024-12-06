import { BaseResponse } from "@/core/response/base-response";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

const generateToken = (payload, secret, time) =>
  jwt.sign(payload, secret, {
    expiresIn: time,
    algorithm: "HS512",
  });

const decodedToken = async (token, secret) => {
  if (!token) {
    throw new BaseResponse.error({
      message: "No token provided",
      status: StatusCodes.BAD_REQUEST,
    });
  }

  const [scheme, authToken] = token.split(" ");

  if (scheme !== "Bearer" || !authToken) {
    throw new BaseResponse.error({
      message: "Invalid token format",
      status: StatusCodes.BAD_REQUEST,
    });
  }

  return new Promise((resolve, reject) => {
    jwt.verify(authToken, secret, { algorithms: ["HS512"] }, (err, decoded) => {
      if (err) {
        reject(
          new BaseResponse.error({
            message: "Token verification failed",
            status: StatusCodes.UNAUTHORIZED,
          }),
        );
      } else {
        resolve(decoded);
      }
    });
  });
};

export { decodedToken, generateToken };
