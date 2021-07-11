import React from 'react';

import DataNotas from "../../Data/DataNotas.json";

import "./Notas.css";

const Notas = () => {
	
	return (
		<form id="notas">
		{
			DataNotas.map((nota) => {
				return (
					<div className="nota" key={nota.posicion}>
						<input type="radio" name="notaSeleccionada" id={nota.posicion} value={nota.posicion} />
						<label htmlFor={nota.posicion}>{nota.nombre}</label>
					</div>
				);
			})
		}
		</form>
	)
}

export default Notas;
