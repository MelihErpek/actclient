import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CampaignRules(props) {
  const [data, setData] = useState();
  const [budget, setBudget] = useState();
  const [budgetType, setBudgetType] = useState();
  const [abtesting, setABTesting] = useState();
  const [adsetbudget, setAdSetBudget] = useState();
  const [success, SetSuccess] = useState(false);
  const [gbmBudget, setGBMBudget] = useState();
  useEffect(() => {
    let campaignname = props.match.params.name;
    axios
      .post("https://act-api.vercel.app/findcampaignrule", { campaignname })
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
          if (element.ruleDescription === "Ad Set Budget") {
            setAdSetBudget(element.rule);
          }
          if (element.ruleDescription === "Target GBM budget") {
            setGBMBudget(element.rule);
          }
        });
        setData(json.data);
      });
  }, []);
  const submit = async () => {
    SetSuccess(false);
    let campaignname = props.match.params.name;

    await axios.post("https://act-api.vercel.app/updateRule2", {
      budget,
      budgetType,
      abtesting,
      adsetbudget,
      campaignname,
      gbmBudget
    });
    SetSuccess(true);
  };
  const handleChange = (event) => {
    setBudgetType(event.target.value);
  };
  const handleChange2 = (event) => {
    setABTesting(event.target.value);
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
  return (
    <div>
      {budget && (
        <div>
          <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
            <div className="sm:w-1/5 w-5/6 space-y-6">
              <div>Budget </div>

              <div className="flex justify-end">
                <input
                  className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                  onChange={(event) => setBudget(event.target.value)}
                  value={budget}
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {budgetType && (
        <div>
          <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
            <div className="sm:w-1/5 w-5/6 space-y-6">
              <div>Budget Type</div>
              <div className="flex">
                {budgetType === "Lifetime Budget" ? (
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
              </div>
            </div>
          </div>
        </div>
      )}
      {abtesting && (
        <div>
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
              </div>
            </div>
          </div>
        </div>
      )}
      {adsetbudget && (
        <div>
          <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
            <div className="sm:w-1/5 w-5/6 space-y-6">
              <div>Ad Set Budget </div>

              <div className="flex justify-end">
                <input
                  className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                  onChange={(event) => setAdSetBudget(event.target.value)}
                  value={adsetbudget}
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {gbmBudget && (
        <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm">
          <div className="sm:w-1/5 w-5/6 space-y-6">
            <div>Target GBM budget </div>

            <div className="flex justify-end">
              <input
                className="bg-zinc-200 rounded-xl p-2 w-full mr-8"
                onChange={(event) => setGBMBudget(event.target.value)}
                value={gbmBudget}
                type="number"
              />
            </div>
          </div>
        </div>
      )}
      <Success />
      {data && (
        <div className="flex justify-center mt-10 text-blue-900 font-bold text-sm ">
          <div className="sm:w-1/5 w-5/6 space-y-6">
            <div
              className="bg-blue-400 text-white w-max p-2 rounded-lg cursor-pointer  "
              onClick={() => submit()}
            >
              Update
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
