import React from "react";
import Carousel from "./atoms/Carousel";

import JS from "../assets/images/Javascript.svg";
import ReactJs from "../assets/images/React.png";
import Node from "../assets/images/Nodejs.png";
import Mongo from "../assets/images/Mongodb.png";
import CSS from "../assets/images/CSS.svg";
import Express from "../assets/images/express.svg";
import Html from "../assets/images/html5.svg";
import Java from "../assets/images/java.png";
import Bootstrap from "../assets/images/Bootstrap.png";

const elements = [
	{ img: JS, text: "" },
	{ img: ReactJs, text: "" },
	{ img: Node, text: "" },
	{ img: Mongo, text: "" },
	{ img: Express, text: "" },
	{ img: Html, text: "" },
	{ img: CSS, text: "" },
	{ img: Java, text: "" },
	{ img: Bootstrap, text: "" },
];
export default function Skill() {
	return <Carousel elements={elements} heading={"MY SKILLS"} id="SKILLS" />;
}
