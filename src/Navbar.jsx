import React from "react";
import {
  CButton,
  CContainer,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
} from "@coreui/react";

const Navbar = () => {
  return (
    <>
      <div>
        <CNavbar className="bg-white shadow-md py-3">
          <CContainer fluid className="flex items-center justify-between px-12">


            <CNavbarBrand className="text-2xl font-bold text-gray-800">
              MyStore
            </CNavbarBrand>
            <ul className="flex items-center gap-8">
                          <li>
              <a
                href="#"
                className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-200"
              >
                Product
              </a>
            </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-200"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-200"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-200"
                >
                  Licensing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>

            <CForm className="flex items-center gap-3">
              <CFormInput
                type="search"
                placeholder="Search products..."
                className="
                  w-64 
                  py-2 px-4 
                  rounded-lg 
                  border border-gray-300 
                  focus:outline-none 
                  focus:ring-2 focus:ring-blue-400
                "
              />

              <CButton
                type="submit"
                color="success"
                className="
                  px-5 py-2 
                  rounded-lg 
                  bg-green-600 
                  text-white 
                  hover:bg-green-700 
                  transition duration-300
                "
              >
                Search
              </CButton>
            </CForm>

          </CContainer>
        </CNavbar>
      </div>
    </>
  );
};

export default Navbar;
