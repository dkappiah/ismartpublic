// import { sequelize } from "./index.js"; // Use the existing Sequelize instance
import { DataTypes } from "sequelize";  // Use ES module import
import { sequelize } from "../utils/db";

const Customer = sequelize.define("Customers", {
  entityName: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING, allowNull: false },
  companyCode: { type: DataTypes.STRING, allowNull: false },
  firstName: { type: DataTypes.STRING, allowNull: false },
  otherName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  userName: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  billingName: { type: DataTypes.STRING, allowNull: false },
  shortCode: { type: DataTypes.STRING, allowNull: false },
  billingDescription: { type: DataTypes.TEXT },
  currency: { type: DataTypes.STRING, allowNull: false },
  apiName: { type: DataTypes.STRING, allowNull: false },
  apiShortCode: { type: DataTypes.STRING, allowNull: false },
  apiDescription: { type: DataTypes.TEXT },
  accessMask: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

export default Customer;
