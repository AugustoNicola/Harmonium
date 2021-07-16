import {useState, useEffect} from 'react';
import Soundfont from "soundfont-player";

const ProveedorSonido = ({contextoAudio, render}) => {
	const [instrumento, setInstrumento] = useState(null);	
	const [nodosAudio, setNodosAudio] = useState({});
	
	// * cargar instrumento al crear el componente
	useEffect(() => {
		Soundfont.instrument(contextoAudio, "acoustic_grand_piano", {
			format: "mp3",
			soundfont: "MusyngKite",
		}).then(instrumento => {
			setInstrumento(instrumento)
		});
	}, [contextoAudio]);
	
	const tocarNota = (numeroMIDI) => {
		contextoAudio.resume().then(() => {
			if(instrumento === null) return;
			const nodoAudio = instrumento.play(numeroMIDI);
			setNodosAudio(
				Object.assign({}, nodosAudio, {
					[numeroMIDI]: nodoAudio,
				})
			);
		});
	};
	
	const pararNota = (numeroMIDI) => {
		contextoAudio.resume().then(() => {
			// ? verificacion nodo de nota existe
			if (!nodosAudio[numeroMIDI]) {
				return;
			}
			
			const nodoABorrar = nodosAudio[numeroMIDI];
			nodoABorrar.stop();
			setNodosAudio(
				Object.assign({}, nodosAudio, {
					[numeroMIDI]: null,
				})
			);
		});
	};
	
	const pararTodasLasNotas = () => {
		contextoAudio.resume().then(() => {
			const nodosABorrar = Object.values(nodosAudio);
			nodosABorrar.forEach(nodo => {
				if (nodo) nodo.stop();
			});
			setNodosAudio({});
		});
	};
	
	return render({
		tocarNota: tocarNota,
		pararNota: pararNota,
		pararTodasLasNotas: pararTodasLasNotas
	})
}

export default ProveedorSonido;
