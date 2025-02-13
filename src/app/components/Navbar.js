"use client";
import { useRouter } from "next/navigation";
import { MdOutlineTranslate } from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between max-w-screen items-center mx-5 lg:mx-28 py-5">
      <p className="font-bold text-red-600 lg:text-4xl text-2xl">AniFlix </p>

      <div className="flex flex-row gap-3">
        <div className="flex flex-row  items-center border border-gray-300 w-28 rounded-md justify-center p-1">
          <MdOutlineTranslate />
          <select className="bg-transparent w-28 text-center outline-none">
            <option className="text-black">English</option>
            <option className="text-black">Hindi</option>
          </select>
        </div>

        <button
          className="bg-red-600 w-24 rounded-lg p-2 font-semibold"
          onClick={() => router.push("/signIn")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
