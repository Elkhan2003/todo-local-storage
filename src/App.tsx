import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { Wrapper } from "./components/wrapper/Wrapper";

export const App = () => {
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React + TS</h1>
			<Wrapper />
		</>
	);
};
