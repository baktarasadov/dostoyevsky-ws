import { DataTypes } from "sequelize";

import { sequelize } from "../../../core/config/db.config";

const Publisher = sequelize.define(
  "Publisher",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "publishers",
  },
);

export default Publisher;
