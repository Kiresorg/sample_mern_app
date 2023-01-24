"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.hasMany(models.Customer, {
        foreignKey: "address_id",
        onDelete: "cascade",
      });
    }
  }
  Address.init(
    {
      address_line_1: DataTypes.STRING,
      address_line_2: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.STRING(40),
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};