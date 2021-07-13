import React, {useState} from 'react';
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
	const nota = useState(null);
	const acorde = useState(null);
	const escala = useState(null);
	const inversion = useState(null);
	
	return (
		<Router>
			<div className="app">
				<Header />
				
				<main className="main">
					<Switch>
						<Route exact path="/" component={Inicio} />
						
						<Route exact path={["/acordes", "/escalas"]}>
							<div className="main-selectores">
								<h1>Elegí una nota tónica y un tipo para formar un acorde</h1>
								<div className="contenedor-selectores">
									<Notas notaSeleccionada={nota[0]} setNota={nota[1]} />
									
									<Switch>
										<Route exact path="/acordes">
											<Acordes acordeSeleccionado={acorde[0]} setAcorde={acorde[1]} setNota={nota[1]} />
										</Route>
										<Route exact path="/escalas">
											<Escalas escalaSeleccionada={escala[0]} setEscala={escala[1]} setNota={nota[1]} />
										</Route>
									</Switch>
									
									<Opciones 
										inversionSeleccionada={inversion[0]}
										setInversion={inversion[1]}
										nota={nota[0]}
										acorde={acorde[0]}
										escala={escala[0]}
									/>
								</div>
							</div>
						</Route>
						
						<Route path="*" component={NoEncontrado} />
					</Switch>
					
					<Piano />
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
