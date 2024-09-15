import { DataTypes } from "sequelize";

import { sequelize } from "../../../core/config/db.config";

const Contact = sequelize.define(
  "Contact",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      trim: true,
      validate: {
        isEmail: true,
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "contacts",
    timestamps: false,
    id: false,
  },
);

export default Contact;
