import React from 'react';

import "./Acordes.css";

import DataAcordes from "../../Data/DataAcordes.json";

const Acordes = () => {
	return (
		<form id="acordes">
		{
			DataAcordes.map((acorde) => {
				return (
					<div className="acorde" key={acorde.posicion}>
						<input type="radio" name="acordeSeleccionado" id={acorde.posicion} value={acorde.posicion} />
						<label htmlFor={acorde.posicion}>{acorde.nombre}</label>
					</div>
				);
			})
		}
		</form>
	)
}

export default Acordes;
