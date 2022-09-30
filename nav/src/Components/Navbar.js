import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from "./Images/logo.png";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className="logo">
                <img src= { logo } />
            </div>
			<nav ref={navRef}>
				<a href="/#Home">Home</a>
				<a href="/#OurServices">Our Services</a>
				<a href="/#Clients">Clients</a>
				<a href="/#Team">Team</a>
				<a href="/#Blog">Blog</a>
				<a href="/#Contact">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;