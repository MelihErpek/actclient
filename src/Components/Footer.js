import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";

export default function Footer() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <div>
      {loggedIn ? (
        <div></div>
      ) : (
        <div>
          <footer class=" text-black py-6 ">
            <div class="container mx-auto flex flex-col md:flex-row items-center md:items-start sm:ml-64 ml-0">
              <div class="mb-6 md:mb-0">
                <img
                  src="./logo.png"
                  alt="Logo"
                  class="h-32 w-32 mx-auto md:ml-11"
                />
                <p class="mt-4 text-center md:text-left md:ml-14 ">
                  Better Media Buying
                </p>
              </div>

              <div class="flex-1 md:ml-32 flex flex-col md:flex-row items-center md:items-start">
                <div class="space-y-6 md:space-y-0 md:space-x-32 flex flex-col md:flex-row items-center md:items-start">
                  <div class="text-center md:text-left">
                    <h3 class="text-black font-bold mb-5 md:mb-8 ">HOME</h3>
                    <p class="mb-4 ">Company</p>
                    <p class="mb-4 ">Tool</p>
                  </div>
                  <div class="text-center md:text-left">
                    <h3 class="text-black font-bold mb-5 md:mb-8 ">ABOUT US</h3>
                    <p class="mb-4 ">Contact Us</p>
                    <p class="mb-4 ">Job Opportunities</p>
                    <p class="mb-4 ">Portfolio</p>
                  </div>
                  <div class="text-center md:text-left">
                    <h3 class="text-black font-bold mb-5 md:mb-8 ">SERVICE</h3>
                    <p class="mb-4 ">Support</p>
                    <p class="mb-4 ">Testimonials</p>
                    <p class="mb-4 ">Pricing</p>
                  </div>
                  <div class="text-center md:text-left">
                    <h3 class="text-black font-bold mb-5 md:mb-8 ">ADDRESS</h3>
                    <p class="mb-4 ">🏠Esentepe Mahallesi, Şişli / İstanbul</p>
                    <p class="mb-4 ">📞(0212) 317 57 00</p>
                    <p class="mb-4 ">📧pr@umww.com</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
