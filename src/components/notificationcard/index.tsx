import { useEffect } from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export default function NotificationCard({ message, type, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-5 right-5 p-4 rounded shadow-lg text-white ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
      <p>{message}</p>
      <button className="ml-4 text-sm underline" onClick={onClose}>Close</button>
    </div>
  );
}
