import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./menu/pages/About";
import MainMenu from "./menu/pages/MainMenu";
import Groups from "./menu/pages/Groups";
import "./App.css";
import GroupAccounts from "./menu/pages/GroupAccounts";
import AccountTransactions from "./menu/pages/AccountTransactions";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={About}></Route>
          <Route path='/menu' component={MainMenu}></Route>
          <Route path='/groups' component={Groups}></Route>
          <Route
            path='/:groupId/accounts'
            component={GroupAccounts}
          ></Route>
          <Route
            path='/:accountId/transactions'
            component={AccountTransactions}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
