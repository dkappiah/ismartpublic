import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Ensure DATABASE_URL is loaded
if (!process.env.DATABASE_URL) {
  throw new Error("❌ DATABASE_URL is not defined in environment variables");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
  logging: false, 
});

// Test connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to the database");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
})();

// Import models after initializing sequelize
import Customer from "../models/customers";

export { sequelize, Customer };
