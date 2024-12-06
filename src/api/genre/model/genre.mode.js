import { DataTypes } from "sequelize";

import { sequelize } from "../../../core/config/db.config";

const Genre = sequelize.define(
  "Genre",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "genres",
  },
);

export default Genre;
