import React from 'react';

import ProveedorSonido from "./ProveedorSonido";
import ProveedorPiano from "./ProveedorPiano";
import "./Piano.css";

const contextoAudio = new (window.AudioContext || window.webkitAudioContext)();

const Piano = ({nota, acorde, escala, inversion}) => {
	return (
		<ProveedorSonido
			contextoAudio={contextoAudio}
			render={({tocarNota, pararNota, pararTodasLasNotas}) => (
				<ProveedorPiano
					tocarNota={tocarNota}
					pararNota={pararNota}
					pararTodasLasNotas={pararTodasLasNotas}
					
					nota={nota}
					acorde={acorde}
					escala={escala}
					inversion={inversion}
				/>
			)}
		/>
	)
}

export default Piano;
