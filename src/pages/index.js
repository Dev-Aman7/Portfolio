import React from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function index() {
	return (
		<div>
			<Nav />
			<Header />
			<About />
			<Skill />
			<Experience />
			<Achievements />
			<Services />
			<Footer />
		</div>
	);
}
