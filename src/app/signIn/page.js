"use client";
import Link from "next/link";
import { MdOutlineTranslate } from "react-icons/md";
import { signIn, signOut, useSession } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();

  return (
    <div>
      <div className="bg-[url('/animeImg.jpg')] bg-cover h-[580px] opacity-60 absolute top-0 left-0 w-full"></div>
      <Link
        className="text-3xl lg:text-4xl text-red-700 font-bold relative m-5"
        href="/"
      >
        AniFlix
      </Link>
      <div className="relative h-full flex flex-col  bg-black bg-opacity-80 w-[60%] lg:w-[30%] mx-auto p-14 gap-3">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <div className="flex flex-col gap-5 justify-center items-center">
          <input
            type="email"
            placeholder="Email address"
            required
            className="bg-transparent border rounded p-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="bg-transparent border rounded p-4 w-full"
          />
          <button className="bg-red-600 p-3 rounded font-bold w-full">
            Sign In
          </button>
          <p>OR</p>
          {/* Google Sign-In Button */}
          {session ? (
            <>
              <p>Welcome, {session.user?.name}!</p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded w-full"
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-neutral-700 w-full p-3 rounded bg-opacity-80 font-bold"
            >
              Continue with Google
            </button>
          )}

          <div className="flex flex-col gap-3">
            <p className="text-sm text-neutral-400">
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              bot.
              <Link href="/" className="text-blue-800">
                Learn more.
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-7 m-6 lg:m-44">
        <p>
          Questions?Call
          <Link href="tel:000-800-919-1743">000-800-919-1743</Link>
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5  underline text-sm text-neutral-400 flex-wrap">
          <Link href="/">FAQ</Link>
          <Link href="/">Help Centre</Link>
          <Link href="/">Terms of USe</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Cookie Preferences</Link>
          <Link href="/">Corporate Information</Link>
        </div>

        <div className="flex flex-row  items-center border border-gray-300 w-28 rounded-md justify-center p-1">
          <MdOutlineTranslate />
          <select className="bg-transparent w-28 text-center outline-none">
            <option className="text-black">English</option>
            <option className="text-black">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
