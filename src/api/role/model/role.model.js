import { DataTypes } from "sequelize";

import { sequelize } from "../../../core/config/db.config";

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
