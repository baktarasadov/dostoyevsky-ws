import { config } from "dotenv";

config();

config({
  path: process.env.NODE_ENV === "development" ? ".env.local" : ".env",
  override: true,
});
