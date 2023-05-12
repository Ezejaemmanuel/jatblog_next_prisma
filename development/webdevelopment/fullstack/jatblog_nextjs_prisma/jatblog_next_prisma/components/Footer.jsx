"use client";
//footer.jsx
import React from "react";
import Link from "next/link";

const accounts = [
  "Facebook page",
  "Instagram page",
  "twitter page",
  "GitHub account",
  "Snapchat account",
];
const systems = ["IOS", "Android", "Windows", "Desktop"];
const chats = ["Discord Server", "Twitter", "Facebook", "Contact Us"];
const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium"></ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {chats.map((chat) => {
                  return (
                    <li className="mb-4" key={chat}>
                      <Link href={"/"} className="hover:underline">
                        {chat}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href={"/"} className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={"/"} className="hover:underline">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={"/"} className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {systems.map((system) => {
                  <li className="mb-4" key={system}>
                    <Link href={"/"} className="hover:underline">
                      {system}
                    </Link>
                  </li>;
                })}
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <Link href="/">JatBlog</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
              {accounts.map((account) => {
                return (
                  <Link
                    key={account}
                    href={"/"}
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">{account}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
