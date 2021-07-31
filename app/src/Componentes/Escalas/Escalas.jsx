import React, {useEffect} from 'react';

import "./Escalas.css";

import DataEscalas from "../../Data/DataEscalas.json";

const Escalas = ({escalaSeleccionada, setEscala, setNota}) => {
	const cambioEscala = (e) => {
		if(e.target.value != "null") setEscala(e.target.value);
	}
	
	useEffect(() => {
		return function cleanup() { setEscala(null); setNota(null); }
	}, [setEscala, setNota])
	
	return (
		window.innerWidth >= 1000 ?
		// * DESKTOP
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
		
		: 
		
		// * MOBILE
		<div className="selector-escalas">
			<select name="escalas" id="escalas" onChange={cambioEscala}>
				<option value={"null"}> Escala </option>
				{
					DataEscalas.map((escala) => {
						return (
							<option className="escala" key={escala.posicion} value={escala.posicion}>{escala.label}</option>
						);
					})
				}
			</select>
		</div>
	)
}

export default Escalas;
