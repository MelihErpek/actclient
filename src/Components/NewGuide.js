import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import AuthContext from "../Context/AuthContext";

const DropdownForm = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [activeRules, setActiveRules] = useState([]);
  const [ruleValues, setRuleValues] = useState({});
  const [selectedAccount, setSelectedAccount] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [complete, setComplete] = useState(false);
  const {  userData } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://act-api.vercel.app/accounts")
      .then((json) => setAccounts(json.data));
  }, []);

  const submit = async () => {
    let userid = userData.user.user._id;
    if (selectedMethod === "Account") {
      await axios.post("https://act-api.vercel.app/rules", {
        ruleValues,
        selectedPlatform,
        selectedAccount,
      });
      setComplete(true);
      setRuleValues({});
      setActiveRules([]);
      //   console.log(selectedMethod)
      //   console.log(campaignName)
      //   console.log(selectedPlatform)
      //   console.log(ruleValues)
    }
    if (selectedMethod === "Campaign") {
      // console.log(ruleValues)
      await axios.post("https://act-api.vercel.app/rulesCampaign", {
        ruleValues,
        selectedPlatform,
        campaignName,
        userid
      });
      setComplete(true);
      setRuleValues({});
      setCampaignName("");
      setActiveRules([]);

    }
  };

  const platforms = ["Google", "Meta", "LinkedIn"];
  const platforms2 = ["Google", "Meta"];
  const rules = {
    Google: [
      { name: "Budget", inputType: "number" },
      {
        name: "Taxonomy",
        inputType: "dropdown",
        options: [
          "BrandName_Platform_CampaignName_Objective_StartDate_EndDate",
          "BrandName|Platform|CampaignName|Objective|StartDate|EndDate",
          "BrandName-Platform-CampaignName-Objective-StartDate-EndDate",
        ],
      },
      { name: "Target GBM budget", inputType: "number" },
      // { name: "Keywords", inputType: "text" },
      // { name: "Ad Group Name", inputType: "text" },
    ],
    Meta: [
      { name: "Budget", inputType: "number" },
      {
        name: "Taxonomy",
        inputType: "dropdown",
        options: [
          "BrandName_Platform_CampaignName_Objective_StartDate_EndDate",
          "BrandName|Platform|CampaignName|Objective|StartDate|EndDate",
          "BrandName-Platform-CampaignName-Objective-StartDate-EndDate",
        ],
      },
      { name: "A/B Testing", inputType: "radio", options: ["Yes", "No"] },
      {
        name: "Budget Type",
        inputType: "dropdown",
        options: ["Daily Budget", "Lifetime Budget"],
      },
      // { name: "Ad Set Name", inputType: "text" },
      { name: "Ad Set Budget", inputType: "number" },
    ],
    LinkedIn: [
      { name: "Budget", inputType: "number" },
      {
        name: "Budget Type",
        inputType: "dropdown",
        options: ["Daily Budget", "Lifetime Budget"],
      },
      {
        name: "Taxonomy",
        inputType: "dropdown",
        options: [
          "BrandName_Platform_CampaignName_Objective_StartDate_EndDate",
          "BrandName|Platform|CampaignName|Objective|StartDate|EndDate",
          "BrandName-Platform-CampaignName-Objective-StartDate-EndDate",
        ],
      },
      // {
      //   name: "Currency",
      //   inputType: "dropdown",
      //   options: ["TL", "USD", "EURO"],
      // },
    ],
  };
  const Complete = (props) => {
    return (
      <div className="my-3">
        <div className="text-xs text-green-500 font-bold">
          You added a rule.
        </div>
      </div>
    );
  };
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    setSelectedPlatform("");
    setActiveRules([]);
    setRuleValues({});
    setSelectedAccount("");
    setCampaignName("");
  };

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
    setActiveRules([]);
    setRuleValues({});
    setSelectedAccount("");
  };

  const handleRuleClick = (rule) => {
    setActiveRules((prev) =>
      prev.includes(rule) ? prev.filter((r) => r !== rule) : [...prev, rule]
    );
    setRuleValues((prev) => ({ ...prev, [rule]: "" }));
  };

  const handleRuleValueChange = (rule, value) => {
    
    setRuleValues((prev) => ({ ...prev, [rule]: value }));
  };

  const handleAccountChange = (event) => {
    console.log("tık")

    setSelectedAccount(event.target.value);
  };

  const getFilteredRules = () => {
    if (selectedMethod === "Campaign") {
      return rules[selectedPlatform].filter(
        (rule) =>
          rule.name !== "Taxonomy" &&
          rule.name !== "Ad Group Name" &&
          rule.name !== "Ad Set Name"
      );
    }
    return rules[selectedPlatform];
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <label className="text-red-400 text-sm font-medium mb-1">
        Select Method
      </label>
      <select
        value={selectedMethod}
        onChange={handleMethodChange}
        className="w-full py-2 px-3 border rounded-md text-sm"
      >
        <option value="">Select a method</option>
        <option value="Campaign">Campaign</option>
        <option value="Account">Account</option>
      </select>

      {(selectedMethod === "Account" ) && (
        <>
          <label className="text-red-400 mt-4 text-sm font-medium mb-1">
            Select Platform
          </label>
          <select
            value={selectedPlatform}
            onChange={handlePlatformChange}
            className="w-full py-2 px-3 border rounded-md text-sm"
          >
            <option value="">Select a platform</option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>

          {selectedPlatform && (
            <>
              {selectedMethod === "Campaign" && (
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1 text-red-400">
                    Campaign Name
                  </label>
                  <input
                    type="text"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    className="w-full py-2 px-3 border rounded-md text-sm"
                  />
                </div>
              )}

              {selectedMethod === "Account" && (
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1 text-red-400">
                    Select Account
                  </label>
                  <select
                    value={selectedAccount}
                    onChange={handleAccountChange}
                    className="w-full py-2 px-3 border rounded-md text-sm"
                  >
                    <option value="">Select an account</option>
                    {accounts.map((account) => (
                      <option key={account.name} value={account.name}>
                        {account.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2 text-red-500">
                  Select Rules
                </h3>
                <div className="flex flex-wrap gap-2">
                  {getFilteredRules().map((rule) => (
                    <button
                      key={rule.name}
                      onClick={() => handleRuleClick(rule.name)}
                      className={`py-2 px-4 rounded-full border ${
                        activeRules.includes(rule.name)
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-white text-red-500 border-red-500"
                      } text-sm`}
                    >
                      {rule.name}
                    </button>
                  ))}
                </div>
              </div>

              {activeRules.map((rule) => {
                const ruleConfig = rules[selectedPlatform].find(
                  (r) => r.name === rule
                );
                return (
                  <div key={rule} className="mt-4">
                    <label className="block text-sm font-medium mb-1">
                      {rule}
                    </label>
                    {ruleConfig.inputType === "text" && (
                      <input
                        type="text"
                        value={ruleValues[rule] || ""}
                        onChange={(e) =>
                          handleRuleValueChange(rule, e.target.value)
                        }
                        className="w-full py-2 px-3 border rounded-md text-sm"
                      />
                    )}
                    {ruleConfig.inputType === "number" && (
                      <input
                        type="number"
                        value={ruleValues[rule] || ""}
                        onChange={(e) =>
                          handleRuleValueChange(rule, e.target.value)
                        }
                        className="w-full py-2 px-3 border rounded-md text-sm"
                      />
                    )}
                    {ruleConfig.inputType === "checkbox" && (
                      <input
                        type="checkbox"
                        checked={ruleValues[rule] || false}
                        onChange={(e) =>
                          handleRuleValueChange(rule, e.target.checked)
                        }
                        className="w-full py-2 px-3 border rounded-md text-sm"
                      />
                    )}
                    {ruleConfig.inputType === "radio" && (
                      <div className="flex gap-2">
                        {ruleConfig.options.map((option) => (
                          <label
                            key={option}
                            className="flex items-center text-sm"
                          >
                            <input
                              type="radio"
                              name={rule}
                              value={option}
                              checked={ruleValues[rule] === option}
                              onChange={(e) =>
                                handleRuleValueChange(rule, e.target.value)
                              }
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                    {ruleConfig.inputType === "dropdown" && (
                      <select
                        value={ruleValues[rule] || ""}
                        onChange={(e) =>
                          handleRuleValueChange(rule, e.target.value)
                        }
                        className="w-full py-2 px-3 border rounded-md text-sm"
                      >
                        {ruleConfig.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
      {(selectedMethod === "Campaign" ) && (
        <>
          <label className="text-red-400 mt-4 text-sm font-medium mb-1">
            Select Platform
          </label>
          <select
            value={selectedPlatform}
            onChange={handlePlatformChange}
            className="w-full py-2 px-3 border rounded-md text-sm"
          >
            <option value="">Select a platform</option>
            {platforms2.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>

          {selectedPlatform && (
            <>
              {selectedMethod === "Campaign" && (
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1 text-red-400">
                    Campaign Name
                  </label>
                  <input
                    type="text"
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    className="w-full py-2 px-3 border rounded-md text-sm"
                  />
                </div>
              )}

              {selectedMethod === "Account" && (
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-1 text-red-400">
                    Select Account
                  </label>
                  <select
                    value={selectedAccount}
                    onChange={handleAccountChange}
                    className="w-full py-2 px-3 border rounded-md text-sm"
                  >
                    <option value="">Select an account</option>
                    {accounts.map((account) => (
                      <option key={account.name} value={account.name}>
                        {account.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2 text-red-500">
                  Select Rules
                </h3>
                <div className="flex flex-wrap gap-2">
                  {getFilteredRules().map((rule) => (
                    <button
                      key={rule.name}
                      onClick={() => handleRuleClick(rule.name)}
                      className={`py-2 px-4 rounded-full border ${
                        activeRules.includes(rule.name)
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-white text-red-500 border-red-500"
                      } text-sm`}
                    >
                      {rule.name}
                    </button>
                  ))}
                </div>
              </div>

              {activeRules.map((rule) => {
                const ruleConfig = rules[selectedPlatform].find(
                  (r) => r.name === rule
                );
                return (
                  <div key={rule} className="mt-4">
                    <label className="block text-sm font-medium mb-1">
                      {rule}
                    </label>
                    {ruleConfig.inputType === "text" && (
                      <input
                        type="text"
                        value={ruleValues[rule] || ""}
                        onChange={(e) =>
                          handleRuleValueChange(rule, e.target.value)
                        }
                        className="w-full py-2 px-3 border rounded-md text-sm"
                      />
                    )}
                    {ruleConfig.inputType === "number" && (
                      <input
                        type="number"
                        value={ruleValues[rule] || ""}
                        onChange={(e) =>
                          handleRuleValueChange(rule, e.target.value)
                        }
                        className="w-full py-2 px-3 border rounded-md text-sm"
                      />
                    )}
                    {ruleConfig.inputType === "checkbox" && (
                      <input
                        type="checkbox"
                        checked={ruleValues[rule] || false}
                        onChange={(e) =>
                          handleRuleValueChange(rule, e.target.checked)
                        }
                        className="w-full py-2 px-3 border rounded-md text-sm"
                      />
                    )}
                    {ruleConfig.inputType === "radio" && (
                      <div className="flex gap-2">
                        {ruleConfig.options.map((option) => (
                          <label
                            key={option}
                            className="flex items-center text-sm"
                          >
                            <input
                              type="radio"
                              name={rule}
                              value={option}
                              checked={ruleValues[rule] === option}
                              onChange={(e) =>
                                handleRuleValueChange(rule, e.target.value)
                              }
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    )}
                    {ruleConfig.inputType === "dropdown" && (
                      <select
                        value={ruleValues[rule] || ""}
                        onChange={(e) =>
                          handleRuleValueChange(rule, e.target.value)
                        }
                        className="w-full py-2 px-3 border rounded-md text-sm"
                      >
                        {ruleConfig.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
      {complete ? <Complete /> : <div></div>}

      <button
        type="button"
        className="w-full py-2 px-4 bg-red-500 text-white rounded-md text-sm mt-5"
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
};

export default DropdownForm;
