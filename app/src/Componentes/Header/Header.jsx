import React from 'react';
import {Link} from "react-router-dom";

import "./Header.css";
import logo from "../../media/logo.svg";

const Header = () => {
	return (
		<header className="header">
			<Link to="/" className="logo">
			<svg xmlns="http://www.w3.org/2000/svg" width="288" height="288" viewBox="-119 0 512 512">
				<path d="m273.609375 291c-3.871094-50.535156-43.800781-89.097656-91.828125-93.234375v-71.199219c34.222656-7.113281 60-44.925781 60-81.441406 0-24.882812-20.1875-45.125-45-45.125-24.816406 0-45 20.242188-45 45.125v54.730469c-93.367188 15.039062-158.4375 91.140625-151.238281 185.15625 6.167969 80.542969 73.886719 139.785156 151.238281 138.445312v43.417969c0 8.339844-6.730469 15.125-15.003906 15.125-8.269532 0-15-6.785156-15-15.125 0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15 0 24.882812 20.1875 45.125 45 45.125s45-20.242188 45-45.125v-47.292969c56.578125-14.460937 96.457031-68.179687 91.832031-128.582031zm-91.828125-245.875c0-8.339844 6.726562-15.125 15-15.125 7.628906 0 15 5.914062 15 15.765625 0 19.199219-12.949219 41.882813-30 49.425781zm-30 154.710938c-39.167969 9.554687-66.890625 46.535156-63.703125 88.15625.632813 8.261718 7.847656 14.4375 16.101563 13.8125 8.261718-.632813 14.445312-7.84375 13.8125-16.105469-1.851563-24.179688 12.472656-45.921875 33.789062-54.441407v162.191407c-62.21875 1.324219-116.394531-46.335938-121.324219-110.726563-5.773437-75.414062 45.363281-138 121.324219-152.414062zm30 188.4375v-160.335938c32.382812 4.023438 59.25 30.527344 61.914062 65.351562 3.292969 42.984376-23.179687 81.484376-61.914062 94.984376zm0 0" fill="currentColor" class="svgShape"></path>
			</svg>
			<h2>Harmonium</h2>
			</Link>
			<div className="opciones">	
				<Link to="/acordes" className="opcion">
					<h2>Acordes</h2>
				</Link>
				<Link to="/escalas" className="opcion">
					<h2>Escalas</h2>
				</Link>
			</div>
		</header>
	)
}

export default Header;
