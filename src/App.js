import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
import info from "./components/info";
import style from "./app.module.css";
import Nav from "./Nav";
function App() {
  return (
    <Router>
    <div className={style.app}>

        <Nav />
     
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path = "/info" component={info} />
      </Switch>
    </div>
    </Router>
  );
}

function Home() {
  return(
    <div>
      <h1>momo</h1>
    </div>
  )
}


export default App;
