import React from "react";
import { Stage } from "@inlet/react-pixi";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Drawing from "./Drawing";

function App() {
  return (
    <div className="App">
      {/* Put in your code here! */}
      <Stage
        width={500}
        height={500}
        options={{
          backgroundColor: 0xeeeeff,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/draw">
              <Drawing />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Stage>
    </div>
  );
}

export default App;
