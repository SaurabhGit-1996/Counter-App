import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
	const [counter, setCounter] = useState(0);

	const handleIncrement = (value) => {
		if (counter + value < 0) {
			setCounter((counter = 0));
		}
		setCounter(counter + value);
	};

	return (
		<>
			<h1>Counter project using React Vite</h1>
			<h2>Counter Value: {counter}</h2>
			<button onClick={() => handleIncrement(+1)}>Click to +1</button> <hr></hr>
			<button onClick={() => handleIncrement(-1)}> Click to -1</button>{" "}
			<hr></hr>
			<button onClick={() => handleIncrement(+2)}>Click to +2</button> <hr></hr>
			<button onClick={() => handleIncrement(-2)}>Click to -2</button> <hr></hr>
			<button onClick={() => setCounter(0)}>Set Counter to 0</button>
		</>
	);
};

export default App;
