import React, { useState, useContext, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import axios from 'axios';
import AuthContext from "../Context/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [errorField, SetErrorField] = useState("");

  const { userData, setLoggedIn, getLoggedIn, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let userResponse = await axios.post("https://act-api.vercel.app/Login", { mail, password });
      localStorage.setItem("auth-token", userResponse.data.token);
      setUserData({
        token: userResponse.data.token,
        user: userResponse.data.user,
      });
      setLoggedIn(true);
      setLoading(false);
      history.push("/guidelines");
    } catch (error) {
      setLoading(false);

      SetErrorField(error.response.data.hata);
    }
  };
  const Error = (props) => {
    const message = props.ErrorType;
    return (
      <div className="my-3 w-48 ">
        <div className="text-xs text-red-500 font-bold ">{message}</div>
      </div>
    );
  };
  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <div>
      <div className="flex flex-col md:flex-row sm:ml-52 ml-0 ">
        <div className="sm:p-40 p-12 my-18">
          <div className="w-full max-w-lg mx-auto lg:mx-0 ">
            <span className="text-sm text-Gray-400">Sign In</span>
            <h4 className="mb-6 text-3xl">Join our tool</h4>
            <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
              <input
                className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold bg-blueGray-50 outline-none"
                type="email"
                placeholder="name@email.com"
                onChange={(event) => setMail(event.target.value)}
              />

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </div>
            <div className="flex mb-6 px-4 bg-Gray-50 rounded border border-gray-200">
              <input
                className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold bg-gray-50 outline-none"
                type="password"
                placeholder="Enter your password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <Error ErrorType={errorField} />


            <button
              onClick={signin}
              className="w-full p-4 text-center text-xs text-white font-semibold bg-red-500 hover:bg-red-700 rounded"
            >
              {loading ? (
                <div className="flex justify-center">
                  <Oval
                    visible={true}
                    height="30"
                    width="30"
                    color="#ffffff"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              ) : (
                <div>Sign In</div>
              )}

            </button>
          </div>
        </div>
        <div>
          <img
            className="image sm:visible invisible sm:w-login sm:h-login w-0"
            src="Login.gif"
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
}
