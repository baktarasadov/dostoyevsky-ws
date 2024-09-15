import { DataTypes } from "sequelize";

import Database from "../../../core/config/db.config";

const sequelize = Database.getInstance();

const Role = sequelize.define(
  "Role",
  {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      trim: true,
    },
  },
  {
    tableName: "roles",
    timestamps: false,
  },
);

export default Role;
