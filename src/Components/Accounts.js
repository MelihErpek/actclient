import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Accounts() {
  const [accountdata, setAccountData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [active, setActive] = useState("Account");
  useEffect(() => {
    axios
      .get("https://act-api.vercel.app/accounts")
      .then((json) => setAccountData(json.data));
  }, []);
  // Filtreleme fonksiyonu
  useEffect(() => {
    if (accountdata) {
      const results = accountdata.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    }

  }, [searchTerm, accountdata]);

  const history = useHistory();

  async function Active(param) {
    history.push("/" + param)

  }
  async function accountPage(param) {
    history.push("/accountupdate/" + param)

  }
  const Content = () => {

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
              type="text"
              placeholder="Search By Account Name"
              className="rounded-3xl bg-gray-300 h-max px-6 py-2 w-24 sm:w-56 sm:text-sm text-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="sm:size-6 size-0 sm:ml-deneme ml-deneme mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

        </div>
      </div>
    );
  };
  const Bar = () => (
    <div>
      <div className="flex justify-center space-x-4 font-bold text-gray-500 text-xs sm:text-base">
        <div className="flex bg-white rounded-2xl">
          <div
            className={`px-6 py-2 cursor-pointer ${active === "Account" ? "bg-blue-700 text-white rounded-xl" : ""
              }`}
            onClick={() => Active("accounts")}
          >
            Account
          </div>
          <div
            className={`px-6 py-2 cursor-pointer ${active === "Guidelines" ? "bg-blue-700 text-white rounded-xl" : ""
              }`}
            onClick={() => Active("guidelines")}
          >
            Guidelines
          </div>
          <div
            className={`px-6 py-2 cursor-pointer ${active === "Your Team" ? "bg-blue-700 text-white rounded-xl" : ""
              }`}
            onClick={() => Active("yourteam")}
          >
            Your Team
          </div>
        </div>
      </div>
    </div>
  );
  const AccountData = () => {
    if (accountdata) {
      return filteredData.map((item) => {
        return (
          <div className="flex bg-white px-6 py-3 rounded-lg shadow-md justify-between items-center  transition-colors duration-300 text-sm">
            <div className="flex ">
              <div>
                <img src={item.imageURL} className="w-10 h-10 rounded-full  " />
              </div>
              <div className="ml-2 border border-gray-400"></div>
              <div className="ml-4">
                <div className="font-bold ">{item.name}</div>
                <div className="text-gray-500  mt-3 text-xs">{item.company}</div>

              </div>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-full" onClick={() => accountPage(item._id)}>
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
  const Account = () => {
    return (
      <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
        <div className="sm:w-1/5 w-5/6 space-y-6">
          <AccountData />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Bar />
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
              type="text"
              placeholder="Search By Account Name"
              className="rounded-3xl bg-gray-300 h-max px-6 py-2 w-24 sm:w-56 sm:text-sm text-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="sm:size-6 size-0 sm:ml-deneme ml-deneme mt-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

        </div>
      </div>
      <Account />
    </div>
  );
}
