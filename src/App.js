import React from "react";

function App() {
  // const greeting = "Hi! Tom!"
  // const dom = <h1 className="foo">{greeting} what's up?</h1>
  // const inputDom = <input type="text" onChange = {()=>{console.log()}}/>
  
  return (
    <React.Fragment>
      <label htmlFor="bar">
        bar
      </label>
      <input type="text" onChange = {()=>{console.log("change")}}/>
    </React.Fragment>
  );
}

export default App;
