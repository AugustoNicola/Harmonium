import React, { useEffect } from 'react';

const ProveedorPiano = ({tocarNota, pararNota, pararTodasLasNotas}) => {
	return (
		<div className="piano" data-transicion style={{animationDelay: "0.6s"}}>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
					<div className="nota accidental"></div>
				</div>
				<div className="grupo">
					<div className="nota natural"></div>
				</div>
			</div>
	)
}

export default ProveedorPiano;
