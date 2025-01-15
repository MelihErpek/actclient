import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export default function YourTeam() {
  const [active, setActive] = useState("Your Team");
  const [data, setData] = useState();
  const { loggedIn, userData } = useContext(AuthContext);

  useEffect(() => {
    if (userData.user) {
      if (userData.user.user) {
        // console.log(userData.user.user.name);
        const id = userData.user.user._id;
        axios.post("https://act-api.vercel.app/members", { id }).then((response) => {
          setData(response.data);
        });
      }
    }
    // axios
    //   .get("http://localhost:5000/members")
    //   .then((json) => setData(json.data));
  }, [userData]);
  const history = useHistory();
  async function userPage(param) {
    history.push("/userupdate/"+param)

  }
  async function Active(param) {
    history.push("/" + param);
  }
  const Content = () => {
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
            <a href="/newadmin">
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
                Add An Admin
              </div>
            </a>
          </div>
        </div>
      );
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
            onClick={() => Active("accounts")}
          >
            Account
          </div>
          <div
            className={`px-6 py-2 cursor-pointer ${
              active === "Guidelines" ? "bg-blue-700 text-white rounded-xl" : ""
            }`}
            onClick={() => Active("guidelines")}
          >
            Guidelines
          </div>
          <div
            className={`px-6 py-2 cursor-pointer ${
              active === "Your Team" ? "bg-blue-700 text-white rounded-xl" : ""
            }`}
            onClick={() => Active("yourteam")}
          >
            Your Team
          </div>
        </div>
      </div>
    </div>
  );
  const MemberData = () => {
    if (data) {
      return data.map(({ name, eMail,_id }) => {
        return (
          <div className="flex bg-white px-6 py-3 rounded-lg shadow-md justify-between items-center  transition-colors duration-300">
            <div className="ml-2">
              <div className="font-semibold">{name}</div>
              <div className="text-gray-500 text-xs">{eMail}</div>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-full" onClick={()=>userPage(_id)}>
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
  return (
    <div>
      <div>
      <div className="flex justify-center space-x-4 font-bold text-gray-500 text-xs sm:text-base">
        <div className="flex bg-white rounded-2xl">
          <div
            className={`px-6 py-2 cursor-pointer ${
              active === "Account" ? "bg-blue-700 text-white rounded-xl" : ""
            }`}
            onClick={() => Active("accounts")}
          >
            Account
          </div>
          <div
            className={`px-6 py-2 cursor-pointer ${
              active === "Guidelines" ? "bg-blue-700 text-white rounded-xl" : ""
            }`}
            onClick={() => Active("guidelines")}
          >
            Guidelines
          </div>
          <div
            className={`px-6 py-2 cursor-pointer ${
              active === "Your Team" ? "bg-blue-700 text-white rounded-xl" : ""
            }`}
            onClick={() => Active("yourteam")}
          >
            Your Team
          </div>
        </div>
      </div>
    </div>
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
          <a href="/newadmin">
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
              Add An Admin
            </div>
          </a>
        </div>
      </div>
      <YourTeam />
    </div>
  );
}
