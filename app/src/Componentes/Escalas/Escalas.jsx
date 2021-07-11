import React from 'react';

import "./Escalas.css";

import DataEscalas from "../../Data/DataEscalas.json";

const Escalas = () => {
	return (
		<form id="escalas">
		{
			DataEscalas.map((escala) => {
				return (
					<div className="escala" key={escala.posicion}>
						<input type="radio" name="acordeSeleccionado" id={escala.posicion} value={escala.posicion} />
						<label htmlFor={escala.posicion}>{escala.nombre}</label>
					</div>
				);
			})
		}
		</form>
	)
}

export default Escalas;
