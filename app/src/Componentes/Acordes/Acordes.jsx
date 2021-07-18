import React, {useEffect} from 'react';

import "./Acordes.css";

import DataAcordes from "../../Data/DataAcordes.json";

const Acordes = ({acordeSeleccionado, setAcorde, setNota, setIndiceInversion}) => {
	const cambioAcorde = (e) => {
		setAcorde(e.target.value);
		setIndiceInversion(0);
	}
	
	useEffect(() => {
		return function cleanup() { setAcorde(null); setNota(null); setIndiceInversion(0); }
	}, [setAcorde, setNota, setIndiceInversion])
	
	return (
		<form id="acordes">
		{
			DataAcordes.map((acorde) => {
				return (
					<div className="acorde" key={acorde.posicion} activo={acorde.posicion == acordeSeleccionado ? "yes" : undefined}>
						<input type="radio" name="acordeSeleccionado" id={acorde.nombre} value={acorde.posicion} onChange={cambioAcorde} />
						<label htmlFor={acorde.nombre}>{acorde.label}</label>
					</div>
				);
			})
		}
		</form>
	)
}

export default Acordes;
