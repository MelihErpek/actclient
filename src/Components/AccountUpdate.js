import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
export default function AccountUpdate(props) {
  const [data, setData] = useState();
  const [accName, setAccName] = useState();
  const [company, setCompany] = useState();
  const [platform, setPlatform] = useState();
  const [success, SetSuccess] = useState(false);
  const [image, setImage] = useState();
  const { loggedIn } = useContext(AuthContext);
  const history = useHistory();
  const [errorField, SetErrorField] = useState("");

  useEffect(() => {
    let id = props.match.params.id;
    axios
      .post("https://act-api.vercel.app/findaccount", {
        id,
      })
      .then((json) => {
        setData(json.data);
        setAccName(json.data.name);
        setCompany(json.data.company);
        setPlatform(json.data.platform);
        setImage(json.data.imageURL);
        
      });
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    SetErrorField("");
    // SetCompanyNameError("");
    SetSuccess(false);
    try {
      let id = props.match.params.id;
      const response = await axios.post("https://act-api.vercel.app/accountupdate", {
        id,
        accName,
        company,
        platform,
        image,
      });
      if (response.data.success) {
        SetSuccess(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.ErrorType === "Field") {
        SetErrorField(error.response.data);
      }
      //   if (error.response.data.ErrorType === "CompanyDontExist") {
      //     SetCompanyNameError(error.response.data);
      //   }
    }
  };

  const remove = async () => {
    try {
      let id = props.match.params.id;
      const response = await axios.post("https://act-api.vercel.app/removeaccount", {
        id,
      });
      history.push("/accounts");
    } catch (error) {
      console.log(error);
    }
  };
  const Success = () => {
    if (success === true) {
      return (
        <div className="my-2">
          <div className="text-xs text-green-500 font-bold">
            You have successfully updated the information.
          </div>
        </div>
      );
    }
  };
  const Error = (props) => {
    const message = props.ErrorType;
    return (
      <div className="my-3">
        <div className="text-xs text-red-500 font-bold">{message}</div>
      </div>
    );
  };
  return (
    <div>
      {loggedIn === false && (
        <div className="flex justify-center sm:mx-48 mt-24">
          <div className="text-zinc-200 font-bold text-xl mr-8">
            You are not logged in.
          </div>
          <div className="text-zinc-200 font-bold text-xl ml-4">
            Go to{" "}
            <a href="/login" className="text-red-400 underline decoration-2">
              Login
            </a>{" "}
            page.
          </div>
        </div>
      )}

      {loggedIn === true && (
        <div>
          {data ? (
            <div className="container flex justify-center sm:mx-48 mt-24">
              <form
                className="bg-zinc-200 shadow-md rounded-2xl sm:w-1/2 px-8 pt-6 pb-8 mb-4"
                onSubmit={submit}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Account Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyName"
                    placeholder={data.name}
                    value={accName}
                    onChange={(event) => setAccName(event.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Company Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyLegalNumber"
                    placeholder={data.company}
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Platform
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="incorporationCountry"
                    placeholder={data.platform}
                    value={platform}
                    onChange={(event) => setPlatform(event.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    İmage
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="webSite"
                    placeholder={data.imageURL}
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                  />
                </div>
                {/* <Error ErrorType={errorField.ErrorMessage} />
                <Error ErrorType={companyNameError.ErrorMessage} /> */}
                <Error ErrorType={errorField.ErrorMessage} />

                <Success />
                <div className="flex items-center ">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update
                  </button>
                  <div
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-12 cursor-pointer"
                    onClick={() => remove()}
                    target="_blank"
                  >
                    Remove Account
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <>
              <div>
                
              </div>
            </>
          )}{" "}
        </div>
      )}
    </div>
  );
}
