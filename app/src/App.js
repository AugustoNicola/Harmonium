import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./Componentes/Header/Header";
import Inicio from "./Componentes/Inicio/Inicio";
import Encabezado from "./Componentes/Encabezado/Encabezado";
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
	const notaInversion = useState(null);
	
	return (
		<Router>
			<div className="app">
				<Header />
				
				<main className="main">
					<Switch>
						<Route exact path="/" component={Inicio} />
						
						<Route exact path={["/acordes", "/escalas"]}>
							<div className="main-selectores">
								<Encabezado />
								<div className="contenedor-selectores" data-transicion style={{animationDelay: "0.4s"}}>
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
										notaInversion={notaInversion[0]}
										not
										nota={nota[0]}
										acorde={acorde[0]}
										escala={escala[0]}
									/>
								</div>
							</div>
						</Route>
						
						<Route path="*" component={NoEncontrado} />
					</Switch>
					
					<Piano
						nota={nota[0]}
						acorde={acorde[0]}
						escala={escala[0]}
						inversion={inversion[0]}
						setNotaInversion={notaInversion[1]}
					/>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
