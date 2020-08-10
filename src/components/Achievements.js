import React from "react";
import Carousel from "./atoms/Carousel";

import Achievement from "../assets/images/achievement.png";
import Iact from "../assets/images/iact.jpeg";
import KCG from "../assets/images/KCG.jpeg";
import IISF from "../assets/images/IISF.jpeg";

const elements = [
	{
		img: Iact,
		text: "1st prize at I'Act 2018 organized by ISA Banglore",
	},
	{
		img: KCG,
		text: "1st prize at Makeathon V1.0, KCG college, Chennai",
	},
	{
		img: IISF,
		text:
			"Selected for INDIA's best innovative project at IISF by MHRD,Govt of India",
	},
	{ img: Achievement, text: "2nd prize at Hack4Cause by IEEE-SSIT, VIT" },
	{ img: Achievement, text: "Special mention at Code2Create ACM, VIT" },
	{
		img: Achievement,
		text: "Presented conference paper at VIT on RFID based navigation system ",
	},
];
export default function Skill() {
	return (
		<Carousel elements={elements} heading={"Achievements"} id="ACHIEVEMENTS" />
	);
}
