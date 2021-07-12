import React, {useEffect} from 'react';

import "./Escalas.css";

import DataEscalas from "../../Data/DataEscalas.json";

const Escalas = ({escalaSeleccionada, setEscala, setNota}) => {
	const cambioEscala = (e) => {
		setEscala(e.target.value);
	}
	
	useEffect(() => {
		return function cleanup() { setEscala(null); setNota(null); }
	}, [setEscala, setNota])
	
	return (
		<form id="escalas">
		{
			DataEscalas.map((escala) => {
				return (
					<div className="escala" key={escala.posicion} activo={escala.nombre === escalaSeleccionada ? "true" : undefined}>
						<input type="radio" name="acordeSeleccionado" id={escala.nombre} value={escala.nombre} onChange={cambioEscala} />
						<label htmlFor={escala.nombre}>{escala.label}</label>
					</div>
				);
			})
		}
		</form>
	)
}

export default Escalas;
