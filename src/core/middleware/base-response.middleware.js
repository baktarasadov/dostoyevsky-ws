import { StatusCodes } from "http-status-codes";
import { BaseResponse } from "../response/base-response";

export default function baseResponseMiddleware(req, res, next) {
  res.success = (props) => {
    res
      .status(props.status || StatusCodes.OK)
      .json(BaseResponse.success(props));
  };

  res.error = (props) => {
    res
      .status(props.status || StatusCodes.BAD_REQUEST)
      .json(BaseResponse.error(props));
  };

  next();
}
