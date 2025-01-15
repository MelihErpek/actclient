import React, { useState, useEffect } from "react";
import axios from "axios";
export default function HomeLI() {
  const [active, setActive] = useState("Guidelines");
  const [data, setData] = useState();
  const [accountdata, setAccountData] = useState();
  const [ruleData, setRuleData] = useState();
  function Active(param) {
    setActive(param);
  }
  const MemberData = () => {
    useEffect(() => {
      axios
        .get("https://act-api.vercel.app/members")
        .then((json) => setData(json.data));
    }, []);
    if (data) {
      return data.map(({ name, eMail }) => {
        return (
          <div className="flex bg-white px-6 py-3 rounded-lg shadow-md justify-between items-center  transition-colors duration-300">
            <div className="ml-2">
              <div className="font-semibold">{name}</div>
              <div className="text-gray-500 text-xs">{eMail}</div>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        );
      });
    }
  };
  const AccountData = () => {
    useEffect(() => {
      axios
        .get("https://act-api.vercel.app/accounts")
        .then((json) => setAccountData(json.data));
    }, []);
    if (accountdata) {
      return accountdata.map(({ name, imageURL, company, ID }) => {
        return (
          <div className="flex bg-white px-6 py-3 rounded-lg shadow-md justify-between items-center  transition-colors duration-300">
            <div className="flex ">
              <div>
                <img src={imageURL} className="w-20 h-20 rounded-full  " />
              </div>
              <div className="ml-2 border border-gray-400"></div>
              <div className="ml-4">
                <div className="font-bold text-lg">{name}</div>
                <div className="text-gray-500  mt-3">{company}</div>
              </div>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        );
      });
    }
  };
  const Bar = () => (
    <div>
      <div className="flex justify-center space-x-4 font-bold text-gray-500 text-xs sm:text-base">
        <div className="flex bg-white rounded-2xl">
          <div
            className={`px-6 py-2 cursor-pointer ${
              active === "Account" ? "bg-blue-700 text-white rounded-xl" : ""
            }`}
            onClick={() => Active("Account")}
          >
            Account
          </div>
          <div
            className={`px-6 py-2 cursor-pointer ${
              active === "Guidelines" ? "bg-blue-700 text-white rounded-xl" : ""
            }`}
            onClick={() => Active("Guidelines")}
          >
            Guidelines
          </div>
          <div
            className={`px-6 py-2 cursor-pointer ${
              active === "Your Team" ? "bg-blue-700 text-white rounded-xl" : ""
            }`}
            onClick={() => Active("Your Team")}
          >
            Your Team
          </div>
        </div>
      </div>
    </div>
  );

  const Content = () => {
    if (active === "Guidelines") {
      return (
        <div className="flex justify-center mt-10 text-xs sm:text-base">
          <div className="flex space-x-2 sm:space-x-10">
            <a href="/newguideline">
              <div className="flex bg-blue-700 text-white cur sm:px-6 px-2 sm:py-2 py-1 font-bold rounded-3xl sm:w-52 w-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="sm:size-6 size-4 mr-4 mt-2 sm:mt-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                New Guidelines
              </div>
            </a>
            <div className="flex">
              <input
                placeholder="Search"
                className="rounded-3xl bg-gray-300 h-max px-6 py-2 w-24 sm:w-80"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 sm:ml-deneme ml-deneme mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div className="flex rounded-3xl bg-gray-300 px-6 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:size-6 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
              <div className="text-gray-500 sm:ml-4 ml-1">Filters</div>
            </div>
          </div>
        </div>
      );
    }
    if (active === "Your Team") {
      return (
        <div className="flex justify-center mt-10 text-xs sm:text-base">
          <div className="flex space-x-2 sm:space-x-10">
            <a href="/newmember">
              <div className="flex bg-blue-700 text-white cur sm:px-6 px-2 sm:py-2 py-1 font-bold rounded-3xl sm:w-52 w-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="sm:size-6 size-4 mr-4 mt-2 sm:mt-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add Member
              </div>
            </a>
            <div className="flex">
              <input
                placeholder="Search"
                className="rounded-3xl bg-gray-300 h-max px-6 py-2 w-24 sm:w-80"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 sm:ml-deneme ml-deneme mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div className="flex rounded-3xl bg-gray-300 px-6 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:size-6 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
              <div className="text-gray-500 sm:ml-4 ml-1">Filters</div>
            </div>
          </div>
        </div>
      );
    }
    if (active === "Account") {
      return (
        <div className="flex justify-center mt-10 text-xs sm:text-base">
          <div className="flex space-x-2 sm:space-x-10">
            <a href="/newaccount">
              <div className="flex bg-blue-700 text-white cur sm:px-6 px-2 sm:py-2 py-1 font-bold rounded-3xl sm:w-56 w-32">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="sm:size-6 size-4 mr-4 mt-2 sm:mt-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add An Account
              </div>
            </a>
            <div className="flex">
              <input
                placeholder="Search"
                className="rounded-3xl bg-gray-300 h-max px-6 py-2 w-24 sm:w-80"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 sm:ml-deneme ml-deneme mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div className="flex rounded-3xl bg-gray-300 px-6 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="sm:size-6 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
              <div className="text-gray-500 sm:ml-4 ml-1">Filters</div>
            </div>
          </div>
        </div>
      );
    }
  };

  const Guidelines = () => {
    useEffect(() => {
      axios.get("https://act-api.vercel.app/findamember").then((response) => {
        setRuleData(response.data);
      });
    }, []);

    if (active === "Guidelines") {
      if (ruleData) {
        return ruleData.map(({ name, imageURL, company, platform }) => {
          return (
            <div className="flex bg-white px-6 py-3 rounded-lg shadow-md justify-between items-center  transition-colors duration-300">
              <div className="flex ">
                <div>
                  <img src={imageURL} className="w-20 h-20 rounded-full  " />
                </div>
                <div className="ml-2 border border-gray-400"></div>
                <div className="ml-4">
                  <div className="font-bold text-lg">{name}</div>
                  <div className="text-gray-500  mt-3">{platform}</div>

                  <div className="text-gray-500  mt-3">{company}</div>
                </div>
              </div>
              <a href={"/accountrules/" +platform+"/" +name}>
                <button className="bg-blue-500 text-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </a>
            </div>
          );
        });
      }

      // return (
      //   <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
      //     <div className="sm:w-2/5 w-5/6 space-y-6">
      //       <div className="flex bg-white px-6 py-3">
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           viewBox="0 0 24 24"
      //           strokeWidth="1.5"
      //           stroke="currentColor"
      //           className="size-5"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      //           />
      //         </svg>
      //         <div className="ml-2">Campaign</div>
      //       </div>
      //       <div className="flex bg-white px-6 py-3">
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           viewBox="0 0 24 24"
      //           strokeWidth="1.5"
      //           stroke="currentColor"
      //           className="size-5"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      //           />
      //         </svg>
      //         <div className="ml-2">Adset</div>
      //       </div>
      //       <div className="flex bg-white px-6 py-3">
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           viewBox="0 0 24 24"
      //           strokeWidth="1.5"
      //           stroke="currentColor"
      //           className="size-5"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      //           />
      //         </svg>
      //         <div className="ml-2">Ad</div>
      //       </div>
      //     </div>
      //   </div>
      // );
    }
  };

  const YourTeam = () => {
    if (active === "Your Team") {
      return (
        <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
          <div className="sm:w-2/5 w-5/6 space-y-6">
            <MemberData />
          </div>
        </div>
      );
    }
  };
  const Account = () => {
    if (active === "Account") {
      return (
        <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
          <div className="sm:w-1/5 w-5/6 space-y-6">
            <AccountData />
          </div>
        </div>
      );
    }
  };
  const GD = () => {
    if (active === "Guidelines") {
      return (
        <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
          <div className="sm:w-1/5 w-5/6 space-y-6">
            <Guidelines />
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Bar />
      <Content />
      <GD />
      <YourTeam />
      <Account />
    </div>
  );
}
