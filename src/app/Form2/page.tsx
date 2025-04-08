"use client";
import React from "react";
// import SecondForm from "@/components/bundleForm/bundleForm";
import DefaultLayout from "@/components/Layout";
import { useRouter } from "next/navigation";


const FirstForm = () => {

  const router = useRouter();
    return (
<DefaultLayout>
<div >
    <button 
    onClick={() => router.back()} 
    className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
  >
    Back
  </button>
  </div>
        
            <div className="mt-110 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
                  {/* <div className="flex flex-wrap items-center"> 
                    <div className="w-full xl:w-1/2"> */}




            
            {/* <SecondForm/> */}
        
        
                    
                  </div>
        
                 
              </div>
              {/* </div>
               </div>  */}
            
        

              </DefaultLayout>   
       
);
};


export default FirstForm;