import { DataTypes } from "sequelize";
import { sequelize } from "../../../core/config/db.config";
import Author from "../../author/model/author.mode";
import Genre from "../../genre/model/genre.mode";

const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.UUID,
      references: {
        model: Author,
        key: "author",
      },
      allowNull: false,
    },
    publisher: {
      type: DataTypes.UUID,
      references: {
        model: Author,
        key: "publisher",
      },
      allowNull: false,
    },
    publishedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    genre: {
      type: DataTypes.UUID,
      references: {
        model: Genre,
        key: "genre",
      },
      allowNull: false,
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "books",
  },
);

export default Book;
