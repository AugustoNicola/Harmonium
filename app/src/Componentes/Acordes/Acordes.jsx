import React, {useEffect} from 'react';

import "./Acordes.css";

import DataAcordes from "../../Data/DataAcordes.json";

const Acordes = ({acordeSeleccionado, setAcorde, setNota}) => {
	const cambioAcorde = (e) => {
		setAcorde(e.target.value);
	}
	
	useEffect(() => {
		return function cleanup() { setAcorde(null); setNota(null); }
	}, [setAcorde, setNota])
	
	return (
		<form id="acordes">
		{
			DataAcordes.map((acorde) => {
				return (
					<div className="acorde" key={acorde.posicion} activo={acorde.nombre === acordeSeleccionado ? "true" : undefined}>
						<input type="radio" name="acordeSeleccionado" id={acorde.nombre} value={acorde.nombre} onChange={cambioAcorde} />
						<label htmlFor={acorde.nombre}>{acorde.label}</label>
					</div>
				);
			})
		}
		</form>
	)
}

export default Acordes;
