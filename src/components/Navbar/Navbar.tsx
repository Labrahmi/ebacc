"use client";

import React from "react";
import Image from "next/image";
import Form from "@/components/Form/Form";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center z-10 p-4">
      <a
        href="/"
        className="flex justify-center items-center gap-2 select-none"
      >
        <h1 className="font-bold text-xl">
          eBacc{" "}
          <span className="text-xs font-normal hidden md:inline">
            by London Academy
          </span>
        </h1>
      </a>
      <ul className="flex gap-3 invisible hidden md:inline">
        <li>
          <a className="hover:underline" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/cats">
            Cats
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/dogs">
            Dogs
          </a>
        </li>
        <li>
          <a className="hover:underline" href="/birds">
            Birds
          </a>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-4">
        <Form />
        <a className="hidden md:inline" href="#">
          <Image
            className="w-10 rounded"
            src={"/Flag_of_France.png"}
            width={500}
            height={500}
            alt="france"
          />
        </a>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
