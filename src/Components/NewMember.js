import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import AuthContext from "../Context/AuthContext";

export default function NewMember() {
  const [name, setName] = useState();
  const [eMail, setMail] = useState();
  const [password, setPassword] = useState();
  const [teamID, setTeamID] = useState();
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [errorField, SetErrorField] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const { loggedIn, userData } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://act-api.vercel.app/accounts")
      .then((json) => setAccounts(json.data));
  }, []);
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleAccountClick = (account) => {
    if (!selectedAccounts.includes(account)) {
      setSelectedAccounts([...selectedAccounts, account]);
    }
  };
  const addamember = async (e) => {
    e.preventDefault();
    setComplete(false);
    setLoading(true);
    SetErrorField("");
    const Admin = userData.user.user._id;
    try {
      let userResponse = await axios.post("https://act-api.vercel.app/addamember", {
        name,
        eMail,
        password,
        selectedAccounts,
        Admin
      });

      setLoading(false);
      setComplete(true);
      setName("");
      setPassword("");
      setMail("");
      setSelectedAccounts([]);
    } catch (error) {
      setLoading(false);
      SetErrorField(error.response.data.hata);
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
  const Complete = (props) => {
    return (
      <div className="my-3">
        <div className="text-xs text-green-500 font-bold">
          You added a team member.
        </div>
      </div>
    );
  };
  return (
    <div>
      {" "}
      <div className="mt-10 flex justify-center">
        <div className="border-4 border-red-500 rounded-xl p-4 w-5/6 sm:w-2/5">
          <div className="flex justify-center text-black font-bold text-2xl">
            Digital Team
          </div>
          <div className="flex justify-center mt-6 text-zinc-400 font-bold text-sm text-center">
            <div className="bg-white w-full p-8 space-y-4">
              <div>Name-Surname</div>
              <input
                placeholder="Pick Your Name Surname"
                className="bg-zinc-200 rounded-xl p-2 w-full"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <div>Mail</div>
              <input
                placeholder="Enter Your Mail"
                className="bg-zinc-200 rounded-xl p-2 w-full"
                onChange={(event) => setMail(event.target.value)}
                value={eMail}
              />
              <div>Password</div>
              <input
                placeholder="Enter Your Password"
                className="bg-zinc-200 rounded-xl p-2 w-full"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
              />
              <div>Accounts</div>
              <div>
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
                {/* <ul>
                  {selectedAccounts.map((account) => (
                    <li key={account.id}>{account.name}</li>
                  ))}
                </ul> */}
              </div>
              {/* <div>Team ID</div>
              <input
                placeholder="Enter Your Accoun ID"
                className="bg-zinc-200 rounded-xl p-2 w-full"
                onChange={(event) => setTeamID(event.target.value)}
              /> */}
              <Error ErrorType={errorField} />
              {complete ? <Complete /> : <div></div>}

              <button
                onClick={addamember}
                className="w-full p-4 text-center text-base text-white font-semibold bg-red-500 hover:bg-red-700 rounded"
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
  );
}
