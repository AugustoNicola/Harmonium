import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Componentes/Header/Header";
import Piano from "./Componentes/Piano/Piano";
import Footer from "./Componentes/Footer/Footer";

import './normalize.css';
import './App.css';

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				
				<Piano />
				
				<Footer />
			</div>
		</Router>
	);
}

export default App;
