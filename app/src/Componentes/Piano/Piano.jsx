import React from 'react';

import ProveedorSonido from "./ProveedorSonido";
import ProveedorPiano from "./ProveedorPiano";
import "./Piano.css";

const contextoAudio = new (window.AudioContext || window.webkitAudioContext)();

const Piano = () => {
	return (
		<ProveedorSonido
			contextoAudio={contextoAudio}
			render={({tocarNota, pararNota, pararTodasLasNotas}) => (
				<ProveedorPiano
					tocarNota={tocarNota}
					pararNota={pararNota}
					pararTodasLasNotas={pararTodasLasNotas}
				/>
			)}
		/>
	)
}

export default Piano;
