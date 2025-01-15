import React, { useEffect, useState } from "react";
import axios from "axios";
export default function AccountRules(props) {
  const [data, setData] = useState();
  const [budget, setBudget] = useState();
  const [currency, setCurrency] = useState();
  const [gbmBudget, setGBMBudget] = useState();
  const [budgetType, setBudgetType] = useState();
  const [abtesting, setABTesting] = useState();
  const [taxonomy, setTaxonomy] = useState();
  const [adsetbudget, setAdSetBudget] = useState();
  const [success, SetSuccess] = useState(false);

  let accountname = props.match.params.accountname;
  let platform = props.match.params.platform;
  useEffect(() => {
    if (platform === "Meta") {
      axios
        .post("https://act-api.vercel.app/findrule", { accountname })
        .then((json) => {
          json.data.forEach((element) => {
            if (element.ruleDescription === "Budget") {
              setBudget(element.rule);
            }
            if (element.ruleDescription === "Budget Type") {
              setBudgetType(element.rule);
            }
            if (element.ruleDescription === "A/B Testing") {
              setABTesting(element.rule);
            }
            if (element.ruleDescription === "Taxonomy") {
              setTaxonomy(element.rule);
            }
            if (element.ruleDescription === "Ad Set Budget") {
              setAdSetBudget(element.rule);
            }
          });
          setData(json.data);
        });
    }
    if (platform === "Google") {
      axios
        .post("https://act-api.vercel.app/findrule", { accountname })
        .then((json) => {
          json.data.forEach((element) => {
            if (element.ruleDescription === "Budget") {
              setBudget(element.rule);
            }

            if (element.ruleDescription === "Taxonomy") {
              setTaxonomy(element.rule);
            }
            if (element.ruleDescription === "Target GBM Budget") {
              setGBMBudget(element.rule);
            }
          });
          setData(json.data);
        });
    }
    if (platform === "LinkedIn") {
      axios
        .post("https://act-api.vercel.app/findrule", { accountname })
        .then((json) => {
          json.data.forEach((element) => {
            if (element.ruleDescription === "Budget") {
              setBudget(element.rule);
            }
            if(element.ruleDescription === "Budget Type"){
              setBudgetType(element.rule);
            }
            if(element.ruleDescription === "Taxonomy"){
              setTaxonomy(element.rule);
            }
            if (element.ruleDescription === "Currency") {
              setCurrency(element.rule);
            }
          });
          setData(json.data);
        });
    }
  }, []);
  const handleChange = (event) => {
    setBudgetType(event.target.value);
  };
  const handleOptionChangeTaxonomy = (event) => {
    setTaxonomy(event.target.value);
  };
  const handleChange2 = (event) => {
    setABTesting(event.target.value);
  };
  const submit = async (_id, rule) => {
    SetSuccess(false);

    await axios.post("https://act-api.vercel.app/updateRule", { _id, rule });
    SetSuccess(true);
  };
  const Success = () => {
    if (success === true) {
      return (
        <div className="flex justify-center my-2 mt-5">
          <div className="text-xs text-green-500 font-bold sm:w-1/5 w-5/6 space-y-6">
            You have successfully updated the information.
          </div>
        </div>
      );
    }
  };
  if (data) {
    if (platform === "Meta") {
      const mappeddata = data.map(
        ({ platform, account, ruleDescription, rule, _id }) => {
          if (ruleDescription === "Budget") {

            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Budget </div>

                  <div className="flex justify-end">
                    <input
                      placeholder={rule}
                      className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                      onChange={(event) => setBudget(event.target.value)}
                      value={budget}
                      type="number"
                    />
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer"
                      onClick={() => submit(_id, budget)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (ruleDescription === "Ad Set Budget") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Ad Set Budget </div>

                  <div className="flex justify-end">
                    <input
                      placeholder={rule}
                      className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                      onChange={(event) => setAdSetBudget(event.target.value)}
                      value={adsetbudget}
                      type="number"
                    />
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer"
                      onClick={() => submit(_id, adsetbudget)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (ruleDescription === "Budget Type") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Budget Type</div>
                  <div className="flex">
                    {rule === "Lifetime Budget" ? (
                      <select
                        className="w-full py-2 px-3 border rounded-md mr-8"
                        onChange={handleChange}
                      >
                        <option selected>Lifetime Budget</option>
                        <option>Daily Budget</option>
                      </select>
                    ) : (
                      <select
                        className="w-full py-2 px-3 border rounded-md mr-8"
                        onChange={handleChange}
                      >
                        <option>Lifetime Budget</option>
                        <option selected>Daily Budget</option>
                      </select>
                    )}

                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer"
                      onClick={() => submit(_id, budgetType)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (ruleDescription === "A/B Testing") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>A/B Testing</div>
                  <div className="flex">
                    <div className="flex">
                      <input
                        type="radio"
                        value="Yes"
                        className="mr-2"
                        onChange={handleChange2}
                        checked={abtesting === "Yes"}
                      />
                      <div className="mt-2">Yes</div>
                      <input
                        type="radio"
                        value="No"
                        className="mr-2 ml-4"
                        onChange={handleChange2}
                        checked={abtesting === "No"}
                      />
                      <div className="mt-2">No</div>
                    </div>
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer ml-10"
                      onClick={() => submit(_id, abtesting)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (ruleDescription === "Taxonomy") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Taxonomy</div>
                  <div className="flex">
                    <div className="flex">
                      <select
                        value={taxonomy}
                        onChange={handleOptionChangeTaxonomy}
                      >
                        <option>
                          BrandName|Platform|CampaignName|Objective|StartDate|EndDate
                        </option>
                        <option>
                          BrandName-Platform-CampaignName-Objective-StartDate-EndDate
                        </option>
                        <option>
                          BrandName_Platform_CampaignName_Objective_StartDate_EndDate
                        </option>
                      </select>
                    </div>
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer ml-10"
                      onClick={() => submit(_id, taxonomy)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }
      );
      return (
        <>
          {mappeddata}
          
          <div>
            <Success />
          </div>
        </>
      );
    }
    if (platform === "Google") {
      const mappeddata = data.map(
        ({ platform, account, ruleDescription, rule, _id }) => {
          if (ruleDescription === "Budget") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Budget </div>

                  <div className="flex justify-end">
                    <input
                      placeholder={rule}
                      className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                      onChange={(event) => setBudget(event.target.value)}
                      value={budget}
                      type="number"
                    />
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer"
                      onClick={() => submit(_id, budget)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (ruleDescription === "Target GBM budget") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Target GBM budget </div>

                  <div className="flex justify-end">
                    <input
                      placeholder={rule}
                      className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                      onChange={(event) => setGBMBudget(event.target.value)}
                      value={gbmBudget}
                      type="number"
                    />
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer"
                      onClick={() => submit(_id, gbmBudget)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (ruleDescription === "Taxonomy") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Taxonomy</div>
                  <div className="flex">
                    <div className="flex">
                      <select
                        value={taxonomy}
                        onChange={handleOptionChangeTaxonomy}
                      >
                        <option>
                          BrandName|Platform|CampaignName|Objective|StartDate|EndDate
                        </option>
                        <option>
                          BrandName-Platform-CampaignName-Objective-StartDate-EndDate
                        </option>
                        <option>
                          BrandName_Platform_CampaignName_Objective_StartDate_EndDate
                        </option>
                      </select>
                    </div>
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer ml-10"
                      onClick={() => submit(_id, taxonomy)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          // return (
          //   <div className="flex bg-white px-6 py-3 rounded-lg shadow-md justify-between items-center  transition-colors duration-300">
          //     <div className="flex ">
          //       <div className="ml-2 border border-gray-400"></div>
          //       <div className="ml-4">
          //         <div className="font-bold text-lg">{account}</div>
          //         <div className="text-gray-500  mt-3">{platform}</div>
          //         <div className="text-gray-500  mt-3">{ruleDescription}</div>
          //         <div className="text-gray-500  mt-3">{rule}</div>
          //       </div>
          //     </div>
          //     <button className="bg-blue-500 text-white p-2 rounded-full">
          //       <svg
          //         xmlns="http://www.w3.org/2000/svg"
          //         fill="none"
          //         viewBox="0 0 24 24"
          //         stroke="currentColor"
          //         className="w-4 h-4"
          //       >
          //         <path
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           strokeWidth="2"
          //           d="M9 5l7 7-7 7"
          //         />
          //       </svg>
          //     </button>
          //   </div>
          // );
        }
      );
      return (
        <>
          {mappeddata}
          <div>
            <Success />
          </div>
        </>
      );
    }
    if (platform === "LinkedIn") {
      const mappeddata = data.map(
        ({ platform, account, ruleDescription, rule, _id }) => {
          if (ruleDescription === "Budget") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Budget </div>

                  <div className="flex justify-end">
                    <input
                      placeholder={rule}
                      className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                      onChange={(event) => setBudget(event.target.value)}
                      value={budget}
                      type="number"
                    />
                  </div>
                  <div
                    className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer"
                    onClick={() => submit(_id, budget)}
                  >
                    Update
                  </div>
                </div>
              </div>
            );
          }
          if (ruleDescription === "Currency") {
            return (
              <>
                <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                  <div className="sm:w-1/5 w-5/6 space-y-6">
                    <div>Currency </div>

                    <div className="flex justify-end">
                      <input
                        placeholder={rule}
                        className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                        onChange={(event) => setCurrency(event.target.value)}
                        value={currency}
                        type="number"
                      />
                    </div>
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer"
                      onClick={() => submit(_id, currency)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </>
            );
          }
          if (ruleDescription === "Budget Type") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Budget Type</div>
                  <div className="flex">
                    {rule === "Lifetime Budget" ? (
                      <select
                        className="w-full py-2 px-3 border rounded-md mr-8"
                        onChange={handleChange}
                      >
                        <option selected>Lifetime Budget</option>
                        <option>Daily Budget</option>
                      </select>
                    ) : (
                      <select
                        className="w-full py-2 px-3 border rounded-md mr-8"
                        onChange={handleChange}
                      >
                        <option>Lifetime Budget</option>
                        <option selected>Daily Budget</option>
                      </select>
                    )}

                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer"
                      onClick={() => submit(_id, budgetType)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (ruleDescription === "Taxonomy") {
            return (
              <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
                <div className="sm:w-1/5 w-5/6 space-y-6">
                  <div>Taxonomy</div>
                  <div className="flex">
                    <div className="flex">
                      <select
                        value={taxonomy}
                        onChange={handleOptionChangeTaxonomy}
                      >
                        <option>
                          BrandName|Platform|CampaignName|Objective|StartDate|EndDate
                        </option>
                        <option>
                          BrandName-Platform-CampaignName-Objective-StartDate-EndDate
                        </option>
                        <option>
                          BrandName_Platform_CampaignName_Objective_StartDate_EndDate
                        </option>
                      </select>
                    </div>
                    <div
                      className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer ml-10"
                      onClick={() => submit(_id, taxonomy)}
                    >
                      Update
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }
      );
      return (
        <>
          {mappeddata}
          <div>
            <Success />
          </div>
        </>
      );
    }
  }
}
