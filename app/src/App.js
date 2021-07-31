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
	
	const numeroInversionesDisponibles = useState(null);
	const indiceInversion = useState(null);
	const nombreNotaInversion = useState(null);
	
	const toggle = useState(false);
	
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
									<Notas
										notaSeleccionada={nota[0]}
										setNota={nota[1]}
										setIndiceInversion={indiceInversion[1]}
									/>
									
									<Switch>
										<Route exact path="/acordes">
											<Acordes
												acordeSeleccionado={acorde[0]}
												setAcorde={acorde[1]}
												setNota={nota[1]}
												setIndiceInversion={indiceInversion[1]}
											/>
										</Route>
										<Route exact path="/escalas">
											<Escalas
												escalaSeleccionada={escala[0]}
												setEscala={escala[1]}
												setNota={nota[1]}
												setIndiceInversion={indiceInversion[1]}
											/>
										</Route>
									</Switch>
									
									<Opciones 
										nota={nota[0]}
										acorde={acorde[0]}
										escala={escala[0]}
										
										numeroInversionesDisponibles={numeroInversionesDisponibles[0]}
										indiceInversion={indiceInversion[0]}
										setIndiceInversion={indiceInversion[1]}
										nombreNotaInversion={nombreNotaInversion[0]}
										
										toggle={toggle[0]}
										setToggle={toggle[1]}
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
						
						setNumeroInversionesDisponibles={numeroInversionesDisponibles[1]}
						indiceInversion={indiceInversion[0]}
						setNombreNotaInversion={nombreNotaInversion[1]}
						
						toggle={toggle[0]}
					/>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
