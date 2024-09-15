import { BaseResponse } from "@/core/response/base-response";
import { APIError } from "@/shared/error-response/error-response";

const errorHandlerMiddleware = (error, request, response, next) => {
  if (error instanceof APIError) {
    return response.status(error.statusCode || 400).json({
      success: false,
      message: error.message,
    });
  }

  next();

  if (error instanceof BaseResponse) {
    return response.error(error);
  }

  return response.status(500).json({
    success: false,
    message: error.message || "Internal Server Error!",
  });
};

export default errorHandlerMiddleware;
