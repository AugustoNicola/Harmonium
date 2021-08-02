import React, {useEffect} from 'react';

import DataNotas from "../../Data/DataNotas.json";
import DataAcordes from "../../Data/DataAcordes.json";
import DataEscalas from "../../Data/DataEscalas.json";

// desde C3 hasta B4 (2 octavas)
const valoresMIDI = [
	48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
	60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71
]

const ProveedorPiano = ({tocarNota, pararNota, pararTodasLasNotas, nota, acorde, escala, setNumeroInversionesDisponibles, indiceInversion, setNombreNotaInversion, toggle}) => {
	
	useEffect(() => {
		let notasAMarcar = [];
		let numeroInversionesDisponibles = null;
		let nombreNotaInversion = null;
		
		// # Desmarcar y destocar todas las notas
		document.querySelectorAll(".nota").forEach(nota => {
			nota.classList.remove("marcada");
			nota.classList.remove("activa");
		});
		pararTodasLasNotas();
		
		if(nota != "null" && acorde != "null")
		{
			// * ==== ACORDE ====
			// # Seleccion de notas del acorde
			notasAMarcar = [parseInt(nota)];
			DataAcordes[acorde].distanciaNotas.forEach(distanciaNotaAcorde => {
				notasAMarcar = [...notasAMarcar, parseInt(nota) + parseInt(distanciaNotaAcorde)];
			});
			numeroInversionesDisponibles = notasAMarcar.length - 1;
			
			// # inversiones de notas
			if(indiceInversion)
			{
				for (let indice = 0; indice < indiceInversion; indice++) {
					let notaAInvertir = notasAMarcar.shift();
					notasAMarcar = [...notasAMarcar, (notaAInvertir + 12)];
					// ? bajar todo una octava para que alcance
					if(notasAMarcar[0] >= 12)
					{
						notasAMarcar = notasAMarcar.map((nota) => {return nota - 12});
					}
				}
				nombreNotaInversion = DataNotas[notasAMarcar[0]].label;
			}
			
			// # marcar y tocar las notas del acorde simultaneamente
			notasAMarcar.forEach(nota => {
				let notaDOM = document.querySelector(`[data-nota="${nota}"]`);
				notaDOM.classList.add("activa");
				tocarNota(valoresMIDI[nota])
			});
		} else if(nota != "null" && escala != "null")
		{
			// * ==== ESCALA ====
			// # seleccion de notas de la escala
			notasAMarcar = [parseInt(nota)];
			DataEscalas[escala].distanciaNotas.forEach(distanciaNotaEscala => {
				notasAMarcar = [...notasAMarcar, parseInt(nota) + parseInt(distanciaNotaEscala)];
			});
			
			// # marcar todas las notas pero tocar y activar en orden
			notasAMarcar.forEach((nota, indice) => {
				let notaDOM = document.querySelector(`[data-nota="${nota}"]`);
				notaDOM.classList.add("marcada");
				
				setTimeout(() => {
					tocarNota(valoresMIDI[nota]);
					notaDOM.classList.add("activa");
					if(indice != 0)
					{
						document.querySelector(`[data-nota="${notasAMarcar[indice - 1]}"]`).classList.remove("activa");
						pararNota(valoresMIDI[notasAMarcar[indice - 1]])
					}
				}, 350 * indice);
				if(indice == notasAMarcar.length - 1)
				{
					setTimeout(() => {
						document.querySelector(`[data-nota="${notasAMarcar[indice]}"]`).classList.remove("activa");
					}, 350 * (indice + 1));
				}
			});
		} else {
			// * no hay notas para marcar
			notasAMarcar = [];
		}
		
		// # Actualiza campos de inversion
		setNumeroInversionesDisponibles(numeroInversionesDisponibles);
		setNombreNotaInversion(nombreNotaInversion);
		// eslint-disable-next-line
	}, [nota, acorde, escala, indiceInversion, toggle])
	
	const tocarNotaManual = e => {
		e.target.classList.add("activa-manual");
		tocarNota(valoresMIDI[e.target.getAttribute("data-nota")])
	}
	
	const pararNotaManual = e => {
		e.target.classList.remove("activa-manual");
		pararNota(valoresMIDI[e.target.getAttribute("data-nota")])
	}
	
	return (
		<div className="piano" data-transicion style={{animationDelay: "0.6s"}}>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={0}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={1}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={2}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={3}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={4}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={5}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={6}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={7}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={8}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={9}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={10}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={11}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={12}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={13}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={14}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={15}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={16}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={17}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={18}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={19}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={20}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={21}></div>
					<div className="nota accidental" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={22}></div>
				</div>
				<div className="grupo">
					<div className="nota natural" onMouseDown={tocarNotaManual} onMouseUp={pararNotaManual} data-nota={23}></div>
				</div>
			</div>
	)
}

export default ProveedorPiano;
