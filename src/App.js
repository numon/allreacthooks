import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HooksList from "./example/HooksList";
import * as hooks from "./example";

function App() {
  return (
    <Router>
      <Link to='/'>Go back </Link>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HooksList}/>
          <Route exact path='/useAsync' component={hooks.UseAsync}/>
          <Route exact path='/useRouter' component={hooks.UseRouter}/>
          <Route exact path='/useWhyDidYouUpdate' component={hooks.UseWhyDidYouUpdate}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
