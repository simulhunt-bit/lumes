// *********************
// Role of the component: Topbar of the header
// Name of the component: HeaderTop.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <HeaderTop />
// Input parameters: no input parameters
// Output: topbar with phone, email and login and register links
// *********************

"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa6";
import { FiMapPin, FiTruck } from "react-icons/fi";

const HeaderTop = () => {
  const { data: session }: any = useSession();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  }
  return (
    <div className="border-b border-white/10 bg-[var(--color-ink)] text-white">
      <div className="mx-auto flex min-h-11 max-w-screen-2xl flex-col justify-center gap-2 px-6 py-2 text-xs font-medium sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/72">
          <li className="flex items-center gap-x-2">
            <FiMapPin className="text-[var(--color-gold)]" />
            <span>Bangladesh Wide Delivery</span>
          </li>
          <li className="flex items-center gap-x-2">
            <FiTruck className="text-[var(--color-gold)]" />
            <span>Premium Jerseys &amp; Modern Fashion</span>
          </li>
        </ul>
        <ul className="flex items-center gap-x-5 font-semibold uppercase tracking-[0.16em] text-white/88">
          {!session ? ( 
          <>
          <li className="flex items-center">
            <Link href="/login" className="flex items-center gap-x-2">
              <FaRegUser className="text-[var(--color-gold)]" />
              <span>Login</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/register" className="flex items-center gap-x-2">
              <FaRegUser className="text-[var(--color-gold)]" />
              <span>Register</span>
            </Link>
          </li>
          </>
          ) :  (<>
          <span className="text-[10px] tracking-[0.14em] text-white/65">{session.user?.email}</span>
          <li className="flex items-center">
            <button onClick={() => handleLogout()} className="flex items-center gap-x-2">
              <FaRegUser className="text-[var(--color-gold)]" />
              <span>Log out</span>
            </button>
          </li>
          </>)}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
