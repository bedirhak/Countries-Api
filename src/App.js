import './style/App.scss';
import React from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Filter from './components/Filter';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
    <Switch>

        <Route exact path="/">
          <Filter/>
          <Countries/>
        </Route>
        <Route path="/countries/:name">
          
        </Route>
      
    </Switch>
    </Router>
  );
}

export default App;
