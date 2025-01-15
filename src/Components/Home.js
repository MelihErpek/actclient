import React from "react";

export default function Home() {
  return (
    <div>
      {" "}
      <div class="hero flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-12 max-w-6xl mx-auto font-sans">
        <div class="hero-left flex-1 text-center md:text-left mb-8 md:mb-0">
          <h1 class="text-3xl md:text-5xl mb-4 font-bold">
            Better Media Buying
          </h1>
          <div class="text-lg md:text-lg mt-8">
            Managing your ad campaigns is now much easier and safer.
          </div>
        </div>
        <div class="hero-right flex-1 text-center md:text-right hidden md:block">
          <img
            src="img/Marketing consulting.gif"
            alt="Hero GIF"
            class="w-48 md:w-auto max-w-xl transform transition-transform duration-300 hover:scale-110 mx-auto"
          />
        </div>
      </div>
      <div class="border-t border-gray-300 w-3/4 md:w-2/4 mx-auto"></div>
      <div class="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-16">
        <img
          src="img/um-logo.webp"
          alt="um"
          class="w-auto h-16 transform transition-transform duration-300 hover:scale-110 mb-8 md:mb-0"
        />
        <img
          src="img/Anadolu-logo.png"
          alt="aü"
          class="w-auto h-24 transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div class="border-t border-gray-300 w-2/4 mx-auto"></div>
      <section id="features" class="py-24 px-4 text-center">
        <h2 class="text-3xl mb-8 font-bold">How to Use</h2>

        <div class="feature-list flex flex-wrap justify-center gap-8  bg-gray-50 p-8">
          <div class="feature border p-6 rounded-lg max-w-xs transform transition-transform duration-300 hover:scale-105 w-full sm:w-1/2 md:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className="w-56 h-56 ml-6"
            >
              <mask
                id="mask0_503_31794"
                maskUnits="userSpaceOnUse"
                x="3"
                y="1"
                width="19"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 1H3V23H22V1ZM9.5 4V6H15.5V4H9.5ZM12.5 10C13.0523 10 13.5 10.4477 13.5 11V17C13.5 17.5523 13.0523 18 12.5 18C11.9477 18 11.5 17.5523 11.5 17V11C11.5 10.4477 11.9477 10 12.5 10ZM17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V13ZM10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15V17C8 17.5523 8.44772 18 9 18C9.55228 18 10 17.5523 10 17V15Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_503_31794)">
                <path
                  d="M18.75 3.75H6.25C5.69772 3.75 5.25 4.19772 5.25 4.75V20.25C5.25 20.8023 5.69772 21.25 6.25 21.25H18.75C19.3023 21.25 19.75 20.8023 19.75 20.25V4.75C19.75 4.19772 19.3023 3.75 18.75 3.75Z"
                  fill="#121331"
                  stroke="#121331"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 3H8.5V7H16.5V3Z"
                  stroke="#121331"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <h3 class="text-xl mb-4 font-bold">Set the Guideline</h3>
            <p>
              Choose which platform you will run on, set guideline for users by
              editing the campaign's metrics.
            </p>
          </div>

          <div class="feature border p-6 rounded-lg max-w-xs transform transition-transform duration-300 hover:scale-105 w-full sm:w-1/2 md:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className="w-56 h-56 ml-6"
            >
              <mask
                id="mask0_503_31844"
                maskUnits="userSpaceOnUse"
                x="2"
                y="1"
                width="21"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23 1H2V23H23V1ZM7.5 18C8.05228 18 8.5 17.5523 8.5 17C8.5 16.4477 8.05228 16 7.5 16C6.94772 16 6.5 16.4477 6.5 17C6.5 17.5523 6.94772 18 7.5 18Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_503_31844)">
                <path
                  d="M14.2525 13.61L7.90255 19.96C7.51255 20.35 6.88251 20.35 6.49251 19.96L4.5425 18.01C4.1525 17.62 4.1525 16.99 4.5425 16.6L10.8925 10.25L14.2525 13.61Z"
                  fill="#121331"
                  stroke="#121331"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.1537 4.01575L13 8.16943L16.182 11.3514L20.4061 7.12725C20.6283 7.70893 20.75 8.34025 20.75 9C20.75 11.8995 18.3995 14.25 15.5 14.25C12.6005 14.25 10.25 11.8995 10.25 9C10.25 6.10051 12.6005 3.75 15.5 3.75C16.0778 3.75 16.6338 3.84333 17.1537 4.01575Z"
                  fill="#121331"
                  stroke="#121331"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <h3 class="text-xl mb-4 font-bold">Create the Campaign</h3>
            <p>
              Return to the platform (etc. Google Ads) and start creating the
              campaign.
            </p>
          </div>

          <div class="feature border p-6 rounded-lg max-w-xs transform transition-transform duration-300 hover:scale-105 w-full sm:w-1/2 md:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              className="h-56 w-56 ml-6"
            >
              <mask
                id="mask0_503_31818"
                maskUnits="userSpaceOnUse"
                x="3"
                y="1"
                width="19"
                height="22"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 1H3V23H22V1ZM9.5 6C8.94772 6 8.5 6.44772 8.5 7C8.5 7.55228 8.94772 8 9.5 8H16.5C17.0523 8 17.5 7.55228 17.5 7C17.5 6.44772 17.0523 6 16.5 6H9.5ZM6.5 18C6.5 16.8954 7.39543 16 8.5 16H18.5V20H8.5C7.39543 20 6.5 19.1046 6.5 18Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_503_31818)">
                <path
                  d="M5.25 4.75C5.25 3.64543 6.14543 2.75 7.25 2.75H18.75C19.3023 2.75 19.75 3.19772 19.75 3.75V17.75H5.25V4.75Z"
                  fill="#121331"
                  stroke="#121331"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 18C5.5 16.3431 6.84315 15 8.5 15H19.5V20C19.5 20.5523 19.0523 21 18.5 21H8.5C6.84315 21 5.5 19.6569 5.5 18Z"
                  fill="#121331"
                  stroke="#121331"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <h3 class="text-xl mb-4 font-bold">Follow the Instructions</h3>
            <p>
              If you do not comply with the campaign guideline, you will receive
              warnings. Adjust your campaign accordingly.
            </p>
          </div>
        </div>
      </section>
      <div class="hero flex flex-col md:flex-row justify-between items-center px-4 md:px-12 max-w-6xl mx-auto font-sans mb-16">
        <div class="hero-left flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 class="text-2xl md:text-3xl mb-8 font-bold">What We Offer</h2>
          <div class="checklist space-y-4 mt-4">
            <div class="text-base md:text-l hero-left max-w-md mx-auto md:mx-0">
              Experience a streamlined and efficient ad campaign management
              platform designed to maximize your success. With a focus on
              usability, error prevention, budget control, and comprehensive
              analytics, you can ensure your campaigns run smoothly and achieve
              outstanding results.
            </div>
            <div class="checklist-item text-base md:text-l font-bold flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clip-path="url(#clip0_113_1443)">
                  <path
                    d="M16.75 9.75L11.1599 15.2502L8.75 12.7502"
                    stroke="#121331"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"

                  />
                  <path
                    d="M12.5 21.25C17.6086 21.25 21.75 17.1086 21.75 12C21.75 6.89137 17.6086 2.75 12.5 2.75C7.39137 2.75 3.25 6.89137 3.25 12C3.25 17.1086 7.39137 21.25 12.5 21.25Z"
                    stroke="#121331"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    
                  />
                </g>
                <defs>
                  <clipPath id="clip0_113_1443">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"

                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="ml-2">User-Friendly Interface</div>
            </div>
            <div class="checklist-item text-base md:text-l font-bold flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clip-path="url(#clip0_113_1443)">
                  <path
                    d="M16.75 9.75L11.1599 15.2502L8.75 12.7502"
                    stroke="#121331"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 21.25C17.6086 21.25 21.75 17.1086 21.75 12C21.75 6.89137 17.6086 2.75 12.5 2.75C7.39137 2.75 3.25 6.89137 3.25 12C3.25 17.1086 7.39137 21.25 12.5 21.25Z"
                    stroke="#121331"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_113_1443">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="ml-2">Error Prevention System</div>
            </div>
            <div class="checklist-item text-base md:text-l font-bold flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clip-path="url(#clip0_113_1443)">
                  <path
                    d="M16.75 9.75L11.1599 15.2502L8.75 12.7502"
                    stroke="#121331"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 21.25C17.6086 21.25 21.75 17.1086 21.75 12C21.75 6.89137 17.6086 2.75 12.5 2.75C7.39137 2.75 3.25 6.89137 3.25 12C3.25 17.1086 7.39137 21.25 12.5 21.25Z"
                    stroke="#121331"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_113_1443">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="ml-2">Budget Management</div>
            </div>
            <div class="checklist-item text-base md:text-l font-bold flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clip-path="url(#clip0_113_1443)">
                  <path
                    d="M16.75 9.75L11.1599 15.2502L8.75 12.7502"
                    stroke="#121331"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 21.25C17.6086 21.25 21.75 17.1086 21.75 12C21.75 6.89137 17.6086 2.75 12.5 2.75C7.39137 2.75 3.25 6.89137 3.25 12C3.25 17.1086 7.39137 21.25 12.5 21.25Z"
                    stroke="#121331"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_113_1443">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="ml-2">Analytics and Reporting</div>
            </div>
          </div>
        </div>
        <div class="hero-right flex-1 text-center md:text-right hidden md:block">
          <img
            src="img/Version control.gif"
            alt="Version Control"
            class="max-w-xl transform transition-transform duration-300 hover:scale-110 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
