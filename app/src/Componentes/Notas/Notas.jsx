import React from 'react';

import DataNotas from "../../Data/DataNotas.json";

import "./Notas.css";

const Notas = ({notaSeleccionada, setNota, setIndiceInversion}) => {
	const cambioNota = (e) => {
		if(e.target.value != "null")
		{
			setNota(e.target.value);
			setIndiceInversion(0);
		}
	}
	
	return (
		window.innerWidth >= 1000 ? 
		// * DESKTOP
		<form id="notas">
		{
			DataNotas.map((nota) => {
				return (
					<div className="nota" key={nota.posicion} activo={nota.posicion == notaSeleccionada ? "yes" : undefined}>
						<input type="radio" name="notaSeleccionada" id={nota.nombre} value={nota.posicion} onChange={cambioNota} />
						<label htmlFor={nota.nombre}>{nota.label}</label>
					</div>
				);
			})
		}
		</form>
		
		: 
		
		// * MOBILE
		<div className="selector-notas">
			<select name="notas" id="notas" onChange={cambioNota}>
				<option value={"null"}> Nota </option>
				{
					DataNotas.map((nota) => {
						return (
							<option className="nota" key={nota.posicion} value={nota.posicion}>{nota.label}</option>
						);
					})
				}
			</select>
		</div>
	)
}

export default Notas;
