import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function NewAccount() {
  const [name, setAccount] = useState("");
  const [company, setCompany] = useState("");
  const [platform, setPlatform] = useState("");
  const [imageURL, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [errorField, SetErrorField] = useState("");

  const addaccount = async (e) => {
    e.preventDefault();
    setComplete(false);
    setLoading(true);
    SetErrorField("");
    try {
      let userResponse = await axios.post("https://act-api.vercel.app/addanaccount", {
        name,
        company,
        imageURL,
        platform
      });

      setLoading(false);
      setComplete(true);
      setAccount("");
      setCompany("");
      setPlatform("");
      setUrl("");
    } catch (error) {
      setLoading(false);
      SetErrorField(error.response.data.hata);
    }
  };

  const handlePlatformChange = (event) => {
    setPlatform(event.target.value);
    
  };


  const Error = (props) => {
    const message = props.ErrorType;
    return (
      <div className="my-3">
        <div className="text-xs text-red-500 font-bold">{message}</div>
      </div>
    );
  };

  const Complete = (props) => {
    return (
      <div className="my-3">
        <div className="text-xs text-green-500 font-bold">
          You added an account.
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="mt-10 flex justify-center">
        <div className="border-4 border-red-500 rounded-xl p-4 w-5/6 sm:w-2/5">
          <div className="flex justify-center text-black font-bold text-2xl">
            Account
          </div>
          <div className="flex justify-center mt-6 text-zinc-600 font-bold text-sm text-center">
            <div className="bg-white w-full p-8 space-y-4">
              <div>Account Name</div>
              <input
                placeholder="Enter Account Name"
                className="bg-zinc-200 rounded-xl p-2 w-full"
                onChange={(event) => setAccount(event.target.value)}
                value={name}
              />
              <div>Platform</div>
              
              <select
                value={platform}
                onChange={handlePlatformChange}
                className="bg-zinc-200 rounded-xl p-2 w-full"
              >
                <option value="">Select a platform</option>
                <option value="Meta">Meta</option>
                <option value="Google">Google</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>

              <div>Company Name</div>
              <input
                placeholder="Enter Company Name"
                className="bg-zinc-200 rounded-xl p-2 w-full"
                onChange={(event) => setCompany(event.target.value)}
                value={company}
              />
              <div>Image URL</div>
              <input
                placeholder="Enter Image URL"
                className="bg-zinc-200 rounded-xl p-2 w-full"
                onChange={(event) => setUrl(event.target.value)}
                value={imageURL}
              />
              <Error ErrorType={errorField} />
              {complete ? <Complete /> : <div></div>}

              <div className="grid justify-end">
                <button
                  onClick={addaccount}
                  className="bg-red-500 px-6 py-2 rounded-xl text-white cursor-pointer"
                >
                  {loading ? (
                    <Oval
                      visible={true}
                      height="30"
                      width="30"
                      color="#ffffff"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    <div>Save</div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}