"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Airports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: Sequelize.STRING,
        unique: true,
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Airports");
  },
};

/**
 *
 * CREATE TABLE Customer(
 * id INT NOTNULL AUTOINCREMENT,
 * name VARCHAR2(20),
 * city VARCHAR2(20),
 * PRIMARY KEY(id));
 */

/**
 * CREATE TABLE Contact(
 * id INT NOTNULL AUTOINCREMENT,
 * customerId INT NOTNULL,
 * customerInfo VARCHAR2(20) NOTNULL,
 * INDEX par_ind(customerId),
 * CONSTRAINT fk_customer FOREIGN KEY(customerId)
 * REFERENCES Customer(id)
 * ON DELECT CASCADE
 * ON UPDATE CASCADE)
 */
