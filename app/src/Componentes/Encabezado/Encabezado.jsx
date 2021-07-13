import React from 'react';
import { useLocation } from 'react-router';

const Encabezado = () => {
	const texto = useLocation().pathname === "/acordes" ?
	"Elegí una nota tónica y una especie para formar un acorde" :
	"Elegí una nota tónica y un modelo para formar una escala";
	
	return (
		<h1 data-transicion style={{animationDelay: "0.2s"}}>{texto}</h1>
	)
}

export default Encabezado;
