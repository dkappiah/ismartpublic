"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroPage() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <Image
        src="/new.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-40 z-0" />

      <div className="absolute top-6 left-86 z-20">
  <Image
    src="/admin.png"
    alt="Company Logo"
    width={310}
    height={1100}
    className="inline-block mr-4"
  />
  
</div>




<div className="absolute top-16 left-200 z-20">
  
  <button
    className="bg-blue-500 text-white px-6 py-2 rounded-lg text-base hover:bg-blue-600 transition"
    onClick={toggleDropdown}
  >
    Customer Forms
  </button>
</div>


      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-bold">Welcome to Our Platform</h1>
          <p className="mt-7 text-lg md:text-3xl">
            Add a new customer to the platform.
          </p>
        </div>

        {/* Dropdown Menu - appears in center below hero text */}
        {isDropdownOpen && (
          <div className="bg-white text-black shadow-lg rounded-lg w-150">
            <ul className="space-y-2 py-4">
              <li>
                <button
                  className="block w-full px-6 py-2 text-lg hover:bg-gray-200 rounded-lg text-left"
                  onClick={() => router.push("/Form1")}
                >
                  International Airtime TopUp Form
                </button>
              </li>
              <li>
                <button
                  className="block w-full px-6 py-2 text-lg hover:bg-gray-200 rounded-lg text-left"
                  onClick={() => router.push("/Form2")}
                >
                  Data Bundle Form
                </button>
              </li>
              <li>
                <button
                  className="block w-full px-6 py-2 text-lg hover:bg-gray-200 rounded-lg text-left"
                  onClick={() => router.push("/Form3")}
                >
                  
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
