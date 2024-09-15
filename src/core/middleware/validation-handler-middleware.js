import Joi from "joi";

export const validationHandlerMiddleware = async (
  schema,
  request,
  response,
  next,
) => {
  try {
    await schema.validateAsync(request.body, {
      abortEarly: false,
      errors: {
        wrap: {
          array: "",
        },
      },
    });

    next();
  } catch (error) {
    if (error instanceof Joi.ValidationError) {
      response.status(422).json({
        success: false,
        message: "Validation Error",
        details: error.details.reduce((acc, curr) => {
          acc[curr.context.key || curr.context.peers?.[0]] =
            curr.message.replace(/"/g, "");

          return acc;
        }, {}),
      });
    } else {
      next(error);
    }
  }
};
