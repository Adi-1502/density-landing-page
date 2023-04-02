import React, { useState } from "react";

function NavBar() {
  const [IsMobileNavBarDropDownOpen, setIsMobileNavBarDropDownOpen] =
    useState(false);

  return (
    <nav class="bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <leftPart class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <a href="#" class="text-white text-2xl font-bold">
                Logo
              </a>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Product
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Feature
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Collaboration
                </a>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  FAQ
                </a>
              </div>
            </div>
          </leftPart>
          <div class="hidden md:block">
            <a
              href="#"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Log in
            </a>
          </div>
          <div class="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              type="button"
              class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() =>
                setIsMobileNavBarDropDownOpen(!IsMobileNavBarDropDownOpen)
              }
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {IsMobileNavBarDropDownOpen && (
        <div class="md:hidden" id="mobile-menu">
          <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Product
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Feature
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Collaboration
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              FAQ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
