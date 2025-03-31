const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

async function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = `Something went wrong while creating a city`;
    ErrorResponse.error = new AppError(
      [`City not found in incoming request in the correct form`],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest };
