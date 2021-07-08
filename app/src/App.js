import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./Componentes/Header/Header";
import Inicio from "./Componentes/Inicio/Inicio";
import Notas from "./Componentes/Notas/Notas";
import Acordes from "./Componentes/Acordes/Acordes";
import Escalas from "./Componentes/Escalas/Escalas";
import Opciones from "./Componentes/Opciones/Opciones";
import Piano from "./Componentes/Piano/Piano";
import Footer from "./Componentes/Footer/Footer";
import NoEncontrado from "./Componentes/NoEncontrado/NoEncontrado";

import './normalize.css';
import './App.css';

const App = () => {
	return (
		<Router>
			<div className="app">
				<Header />
				
				<div className="main">
					<Switch>
						<Route exact path="/" component={Inicio} />
						
						<Route exact path={["/acordes", "/escalas"]}>
							<h1>Título!</h1>
							<div className="contenedor-selectores">
								<Notas />
								
								<Switch>
									<Route exact path="/acordes" component={Acordes} />
									<Route exact path="/escalas" component={Escalas} />
								</Switch>
								
								<Opciones />
							</div>
						</Route>
						
						<Route path="*" component={NoEncontrado} />
					</Switch>
				</div>
				
				<Piano />
				
				<Footer />
			</div>
		</Router>
	);
}

export default App;
