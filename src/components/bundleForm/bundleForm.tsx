// "use client";
// import { useState } from "react";


// export default function SecondForm() {

//   const [formData, setFormData] = useState<{
//     entityName: string;
//     country: string;
//     companyCode: string;
//     firstName: string;
//     otherName: string;
//     lastName: string;
//     email: string;
//     userName: string;
//     role: string;
//     phone: string;
//     address: string;
//     billingName: string;
//     shortCode: string;
//     billingDescription: string;
//     currency: string;
//     apiName: string;
//     apiShortCode: string;
//     apiDescription: string;
//     accessMask: string;
//     document: File | null;
//   }>({
//     entityName: "",
//     country: "",
//     companyCode: "",
//     firstName: "",
//     otherName: "",
//     lastName: "",
//     email: "",
//     userName: "",
//     role: "",
//     phone: "",
//     address: "",
//     billingName: "",
//     shortCode: "",
//     billingDescription: "",
//     currency: "",
//     apiName: "",
//     apiShortCode: "",
//     apiDescription: "",
//     accessMask: "",
//     document: null,
//   });
   

//   function handleChange(e: { target: { name: any; value: any; }; }) {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   }

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]; 
  
//     if (file) {
//       setFormData((prev) => ({ ...prev, document: file }));
//     }
//   };
  
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
//     let response;
//     let result;
  
//     try {
//       if (formData.document) {
//         const formDataToSend = new FormData();
//         Object.keys(formData).forEach((key) => {
//           if (key !== "document") {
//             formDataToSend.append(key, (formData as any)[key]);
//           }
//         });
//         formDataToSend.append("document", formData.document);
  
//         response = await fetch("/api/customers", {
//           method: "POST",
//           body: formDataToSend,
//         });
//       } else {
//         response = await fetch("/api/customers", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
//       }
  
//       result = await response.json();
  
//       if (response.ok) {
//         alert("Customer added successfully!");
//       } else {
//         alert("Error: " + result.message);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form");
//     }
//   };


//   return (
//     <div className="relative top-0 left-0  p-10 bg-white z-40">  
//       <div className="mt-5 p-10 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold mb-4">Account Creation Requirement</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="entityName" placeholder="Entity Name" value={formData.entityName} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="companyCode" placeholder="Company Code/Registration Code" value={formData.companyCode} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="otherName" placeholder="Other Name" value={formData.otherName} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="userName" placeholder="User Name" value={formData.userName} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded" />
//         <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
//         {/* <h2 className="text-xl font-bold mb-4">Billing Details</h2>
//         <input type="text" name="billingName" placeholder="Name" value={formData.billingName} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="shortCode" placeholder="Short Code" value={formData.shortCode} onChange={handleChange} className="w-full p-2 border rounded" />
//         <textarea name="billingDescription" placeholder="Description" value={formData.billingDescription} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
//         <input type="text" name="currency" placeholder="Currency(Trading Currency)" value={formData.currency} onChange={handleChange} className="w-full p-2 border rounded" />
//         <h2 className="text-xl font-bold mb-4">API Details</h2>
//         <input type="text" name="apiName" placeholder="API Name" value={formData.apiName} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input type="text" name="apiShortCode" placeholder="Short Code Name" value={formData.apiShortCode} onChange={handleChange} className="w-full p-2 border rounded" />
//         <textarea name="apiDescription" placeholder="Description" value={formData.apiDescription} onChange={handleChange} className="w-full p-2 border rounded"></textarea> */}
//         {/* <input type="text" name="accessMask" placeholder="Access Mask / Level" value={formData.accessMask} onChange={handleChange} className="w-full p-2 border rounded" /> */}
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }
