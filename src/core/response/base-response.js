import { getReasonPhrase, StatusCodes } from "http-status-codes";

export class BaseResponse {
  constructor(data) {
    this.success = data.success;
    this.status = data.status;
    this.message = data.message;
    this.data = data.data;
    this.details = data.details;
  }

  static success({ status = StatusCodes.OK, message, data }) {
    return new BaseResponse({
      success: true,
      status,
      message: message || getReasonPhrase(status),
      data,
    });
  }

  static error({ message, status = StatusCodes.BAD_REQUEST, details = null }) {
    return new BaseResponse({
      success: false,
      status,
      message: message || getReasonPhrase(status),
      details,
    });
  }
}
