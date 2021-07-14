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
					<div className="escala" key={escala.posicion} activo={escala.posicion == escalaSeleccionada ? "yes" : undefined}>
						<input type="radio" name="acordeSeleccionado" id={escala.label} value={escala.posicion} onChange={cambioEscala} />
						<label htmlFor={escala.label}>{escala.label}</label>
					</div>
				);
			})
		}
		</form>
	)
}

export default Escalas;
