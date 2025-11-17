import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className=" px-12 mx-auto md:flex md:items-center md:justify-between">
          <span className="text-sm">
            © 2025 <span className="font-semibold text-white">Happy</span>. All Rights Reserved.
          </span>

          <ul className="flex flex-wrap items-center mt-3 md:mt-0 text-sm gap-5">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
