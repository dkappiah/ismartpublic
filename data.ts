export interface FormDataType {
    // Company / Entity Info
    entityName: string;
    country: string;
    companyCode: string;
  
    // User Info
    firstName: string;
    otherName: string;
    lastName: string;
    email: string;
    userName: string;
    role: string;
    phone: string;
    address: string;
  
    // Billing Details
    billingName: string;
    shortCode: string;
    billingDescription: string;
    currency: string;
  
    // API Details
    apiName: string;
    apiShortCode: string;
    apiDescription: string;
    accessMask: string;
  }
  