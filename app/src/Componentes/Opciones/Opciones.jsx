import React, {useState, useEffect} from 'react';

import DataNotas from "../../Data/DataNotas.json";
import DataAcordes from "../../Data/DataAcordes.json";
import DataEscalas from "../../Data/DataEscalas.json";

import "./Opciones.css";

const Opciones = ({inversionSeleccionada, setInversion, nota, acorde, escala}) => {
	const [label, setLabel] = useState(null);
	const [invertirDisponible, setInvertirDisponible] = useState(false);
	const [tocarDisponible, setTocarDisponible] = useState(false);
	
	useEffect(() => {
		if(nota && acorde)
		{
			setLabel(`${DataNotas[nota].label}${DataAcordes[acorde].label}`);
			setInvertirDisponible(true);
			setTocarDisponible(true);
		} else if(nota && escala)
		{
			setLabel(`${DataNotas[nota].label}${DataEscalas[escala].nombre}`);
			setInvertirDisponible(false);
			setTocarDisponible(true);
		} else {
			setLabel("");
			setInvertirDisponible(false);
			setTocarDisponible(false);
		}
	}, [nota, acorde, escala, inversionSeleccionada])
	
	return (
		<div className="opciones">
			<div className="label">{label}</div>
			<button className="invertir" disabled={!invertirDisponible ? "yes" : undefined}>Invertir</button>
			<button className="tocar" disabled={!tocarDisponible ? "yes" : undefined}>Tocar</button>
		</div>
	)
}

export default Opciones;
