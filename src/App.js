import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./routes/Main";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Main}></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
