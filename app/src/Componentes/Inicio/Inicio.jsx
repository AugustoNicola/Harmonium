import React from 'react';
import { Link } from 'react-router-dom';

import "./Inicio.css";

const Inicio = () => {
	return (
		<div className="inicio">
			<h1 data-transicion style={{animationDelay: "0s"}}>Bienvenido a Harmonium, el piano virtual para aprender conceptos musicales</h1>
			
			<p data-transicion style={{animationDelay: "0.2s"}}>Para empezar, podés seleccionar qué concepto querés trabajar:</p>
			
			<div className="opciones">
				<Link to="/acordes" className="opcion" data-transicion style={{animationDelay: "0.6s"}}>
					<h2>Acordes</h2>
					<p>Un acorde se produce tocando múltiples notas al mismo tiempo, creando una nueva armonía distinta a cualquier nota individual. Hay muchos acordes, y las notas que los componen son claves para entenderlos.</p>
				</Link>
				<Link to="/escalas" className="opcion" data-transicion style={{animationDelay: "0.6s"}}>
					<h2>Escalas</h2>
					<p>Una escala es una sucesión de notas que crea un entorno sonoro particular. Las escalas ayudan a entender qué rol toma cada nota en una melodía, dependiendo de su relación con la tónica de la escala.</p>
				</Link>
			</div>
		</div>
	)
}

export default Inicio;
