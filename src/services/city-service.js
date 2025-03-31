const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
    }
    throw error;
  }
}

async function destroyCity(data) {
  try {
    const city = await cityRepository.destroy(data);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError(
        `The city you requested to delete is not present`,
        error.statusCode
      );
    }
    throw new AppError(
      `Cannot delete the city`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createCity, destroyCity };
