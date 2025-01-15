import React from 'react'
import {
    BrowserRouter as RouterApp,
    Switch,
    Route
} from "react-router-dom";

import Home from "../Components/Home"
import Login from "../Components/Login"
import HomeLI from "../Components/HomeLI"
import NewGuide from "../Components/NewGuide"
import NewMember from "../Components/NewMember"
import NewAccount from "../Components/NewAccount"
import AccountRules from "../Components/AccountRules"
import Accounts from "../Components/Accounts"
import Guidelines from "../Components/Guidelines"
import YourTeam from "../Components/YourTeam"
import NewAdmin from "../Components/NewAdmin"
import AccountUpdate from "../Components/AccountUpdate"
import UserUpdate from "../Components/UserUpdate"
import CampaignRules from "../Components/CampaignRules"
export default function Router() {
    return (
        <div>
            <RouterApp>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/homeli" component={HomeLI} />
                    <Route path="/newguideline" component={NewGuide} />
                    <Route path="/newmember" component={NewMember} />
                    <Route path="/newaccount" component={NewAccount} />
                    <Route path="/accounts" component={Accounts} />
                    <Route path="/guidelines" component={Guidelines} />
                    <Route path="/yourteam" component={YourTeam} />
                    <Route path="/newadmin" component={NewAdmin} />
                    <Route path="/accountrules/:platform/:accountname" component={AccountRules} />
                    <Route path="/accountupdate/:id" component={AccountUpdate} />
                    <Route path="/userupdate/:id" component={UserUpdate} />
                    <Route path="/campaignrules/:name" component={CampaignRules} />
                </Switch>
            </RouterApp>


        </div>
    )
}
