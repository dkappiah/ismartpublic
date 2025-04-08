// import { Sequelize } from "sequelize";
// import Customer from "./customers";
// import dotenv from "dotenv";

// dotenv.config();

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false, // Required for AWS RDS if using SSL
//     },
//   },
//   logging: false, // Set to true for debugging
// });

// // Test connection
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("✅ Connected to the database");
//   } catch (error) {
//     console.error("❌ Database connection failed:", error);
//   }
// })();

// // Export the models and connection
// export { sequelize, Customer };