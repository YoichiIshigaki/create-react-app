import React,{Component} from "react";

// function App() {
//   // const greeting = "Hi! Tom!"
//   // const dom = <h1 className="foo">{greeting} what's up?</h1>
//   // const inputDom = <input type="text" onChange = {()=>{console.log()}}/>
  
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">
//         bar
//       </label>
//       <input type="text" onChange = {()=>{console.log("aaa")}}/>
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      <p>Hi</p>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>neno</div>
}

export default App;
