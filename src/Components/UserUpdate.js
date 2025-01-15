import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
export default function UserUpdate(props) {
  const [data, setData] = useState();
  const history = useHistory();
  const [errorField, SetErrorField] = useState("");
  const [success, SetSuccess] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [accounts, setAccounts] = useState();
  const [password, setPassword] = useState();
  const { loggedIn } = useContext(AuthContext);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    if (searchTerm) {
      const results = accounts.filter((account) =>
        account.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAccounts(results);
    } else {
      setFilteredAccounts([]);
    }
  }, [searchTerm, accounts]);
  useEffect(() => {
    axios
      .get("https://act-api.vercel.app/accounts")
      .then((json) => setAccounts(json.data));
  }, []);
  useEffect(() => {
    let id = props.match.params.id;
    axios
      .post("https://act-api.vercel.app/finduser", {
        id,
      })
      .then((json) => {
        setData(json.data);
        setSelectedAccounts(json.data.account);
        // setPassword(json.data.password);
        setName(json.data.name);
        setEmail(json.data.eMail);
      });
  }, []);
  const handleAccountClick = (account) => {
    
    if (!selectedAccounts.includes(account)) {
      setSelectedAccounts([...selectedAccounts, account]);
    }
    console.log(selectedAccounts);
  };
  const submit = async (e) => {
    e.preventDefault();
    SetErrorField("");
    // SetCompanyNameError("");
    SetSuccess(false);
    try {
      let id = props.match.params.id;
      const response = await axios.post("https://act-api.vercel.app/userupdate", {
        id,
        name,
        email,
        password,
        selectedAccounts,
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
      const response = await axios.post("https://act-api.vercel.app/removeuser", {
        id,
      });
      history.push("/yourteam");
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
                    User Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyName"
                    placeholder={data.name}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    E-Mail
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyLegalNumber"
                    placeholder={data.eMail}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="incorporationCountry"
                    placeholder={"password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Account
                  </label>
                  <input
                    className="bg-zinc-200 rounded-xl p-2 w-full"
                    type="text"
                    placeholder="Search accounts"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <ul className="mt-3">
                    {filteredAccounts.map((account) => (
                      <li
                        className="bg-zinc-200 rounded-xl p-2 text-left mt-2"
                        key={account.id}
                        onClick={() => handleAccountClick(account)}
                      >
                        {account.name}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {selectedAccounts.map((account) => (
                      <button
                        key={account.name}
                        // onClick={() => handleRuleClick(rule.name)}
                        className={`py-2 px-4 rounded-full border ${
                          selectedAccounts.includes(account.name)
                            ? "bg-red-500 text-white border-red-500"
                            : "bg-white text-red-500 border-red-500"
                        }`}
                      >
                        {account.name}
                      </button>
                    ))}
                  </div>
                  {/* <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="webSite"
                  placeholder={data.imageURL}
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                /> */}
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
                    Remove User
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
