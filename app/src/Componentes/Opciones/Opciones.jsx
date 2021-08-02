import React, {useState, useEffect} from 'react';

import DataNotas from "../../Data/DataNotas.json";
import DataAcordes from "../../Data/DataAcordes.json";
import DataEscalas from "../../Data/DataEscalas.json";

import "./Opciones.css";

const Opciones = ({nota, acorde, escala, numeroInversionesDisponibles, indiceInversion, setIndiceInversion, nombreNotaInversion, toggle, setToggle}) => {
	const [label, setLabel] = useState(null);
	const [invertirDisponible, setInvertirDisponible] = useState(false);
	const [tocarDisponible, setTocarDisponible] = useState(false);
	
	useEffect(() => {
		if(nota != "null" && acorde != "null")
		{
			nombreNotaInversion ? 
				setLabel(`${DataNotas[nota].label}${DataAcordes[acorde].label}/${nombreNotaInversion}`) :
				setLabel(`${DataNotas[nota].label}${DataAcordes[acorde].label}`);
			setInvertirDisponible(true);
			setTocarDisponible(true);
		} else if(nota != "null" && escala != "null")
		{
			setLabel(`${DataNotas[nota].label}${DataEscalas[escala].nombre}`);
			setInvertirDisponible(false);
			setTocarDisponible(true);
		} else {
			setLabel("");
			setInvertirDisponible(false);
			setTocarDisponible(false);
		}
	}, [nota, acorde, escala, nombreNotaInversion])
	
	const cambioInversion = () => {
		setIndiceInversion(indiceInversion == numeroInversionesDisponibles ? 0 : (indiceInversion + 1));
	};
	
	const cambioTocar = () => {
		setToggle(!toggle);
	};
	
	return (
		<div className="opciones">
			<div className="label">{label}</div>
			<button className="invertir" onClick={cambioInversion} disabled={!invertirDisponible ? "yes" : undefined}>Invertir</button>
			<button className="tocar" onClick={cambioTocar} disabled={!tocarDisponible ? "yes" : undefined}>Tocar</button>
		</div>
	)
}

export default Opciones;
