import React from 'react';

import DataNotas from "../../Data/DataNotas.json";

import "./Notas.css";

const Notas = ({notaSeleccionada, setNota}) => {
	const cambioNota = (e) => {
		setNota(e.target.value);
	}
	
	return (
		<form id="notas">
		{
			DataNotas.map((nota) => {
				return (
					<div className="nota" key={nota.posicion} activo={nota.nombre === notaSeleccionada ? "true" : undefined}>
						<input type="radio" name="notaSeleccionada" id={nota.nombre} value={nota.nombre} onChange={cambioNota} />
						<label htmlFor={nota.nombre}>{nota.label}</label>
					</div>
				);
			})
		}
		</form>
	)
}

export default Notas;
