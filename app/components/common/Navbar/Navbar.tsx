"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between border-b border-gray-200">
          {/* Left Section: Logo + Links */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt="Bites of bliss"
                width={200}
                height={50}
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:ml-10 lg:block">
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-green-50  border-b-2 hover:border-t-2 hover:border-white"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className=" px-3 py-2 text-green-50  border-b-2 hover:border-t-2 hover:border-white "
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="px-3 py-2  text-green-50  border-b-2 hover:border-t-2 hover:border-white"
                >
                  Last Order
                </Link>
                <Link
                  href="#"
                  className=" px-3 py-2 text-sm font-medium text-green-50 border-b-2 hover:border-t-2 hover:border-white"
                >
                  Top Rated
                </Link>
              </div>
            </div>
          </div>

          {/* Search Section */}
          {/* <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-400 focus-within:text-gray-500">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div> */}

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                // Close Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:ml-4 lg:block">
            <div className="flex items-center">
              <button
                type="button"
                className="flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              {/* User dropdown */}
              <div className="relative ml-3">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex rounded-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263"
                    alt=""
                  />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-green-50 hover:text-black hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm  text-green-50 hover:text-black hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm text-green-50 hover:text-black hover:bg-gray-100"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="border-b border-gray-200 bg-gray-50 lg:hidden"
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="bg-gray-100 block px-3 py-2 rounded-md font-medium text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-white"
            >
              Products
            </a>
            <a
              href="#"
              className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-white"
            >
              Last Order
            </a>
            <a
              href="#"
              className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-white"
            >
              Top Rated
            </a>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center px-5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263"
                alt=""
              />
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  John Doe
                </div>
                <div className="text-sm font-medium text-gray-500">
                  john@example.com
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-gray-100"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
