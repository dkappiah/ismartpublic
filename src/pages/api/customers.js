import Customer from "../../models/customers"; // Ensure correct import path
import { sequelize } from "../../utils/db";



export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
   
        // Ensure the database connection is established
        await sequelize.authenticate();
        console.log("✅ Connected to the database");
  
       

      const { 
        entityName, country, companyCode, firstName, OtherName, lastName, 
        email, userName, role, phone, address, billingName, shortCode, 
        billingDescription, currency, apiName, apiShortCode, apiDescription, 
        accessMask 
      } = req.body;

      const newCustomer = await Customer.create({
        entityName,
        country,
        companyCode,
        firstName,
        OtherName,
        lastName,
        email,
        userName,
        role,
        phone,
        address,
        billingName,
        shortCode,
        billingDescription,
        currency,
        apiName,
        apiShortCode,
        apiDescription,
        accessMask,
      });

      res.status(201).json({ message: "Customer added successfully", newCustomer });
    } catch (error) {
      console.error("Error creating customer:", error);
      res.status(500).json({ message: "Error creating customer", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
