import React from "react";
import PropTypes from "prop-types"
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
	const profiles = [
		{ name: "Taro", age: 10 },
		{ name: "Hanako", age: 13 },
		{ name: "Hanako" },
	];

	return (
		<div>
			{profiles.map((profile, index) => {
				return <User name={profile.name} age={profile.age} key={index} />;
			})}
			<p>Hi</p>
		</div>
	);
};

const User = (props) => {
	return (
		<div>
			<p>Hi! , I'am {props.name}.</p>
			<p>I'm {props.age} years old.</p>
		</div>
	);
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

User.defaultProps = {
	age: 20,
};

export default App;
