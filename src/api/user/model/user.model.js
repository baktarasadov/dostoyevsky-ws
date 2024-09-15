import { DataTypes } from "sequelize";

import { sequelize } from "../../../core/config/db.config";

const User = sequelize.define(
  "User",
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
    contact: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "contacts",
        key: "id",
      },
    },
  },
  {
    tableName: "users",
  },
);

export default User;
