import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";

import CustomCard from "./customCard";

import whiteBar from "../../assets/images/whitebar.png";

const useStyles = makeStyles((theme) => ({
	container: {
		background: theme.backgroundColor,
		paddingTop: "2rem",
	},
	header: {
		fontWeight: theme.bolder,
		color: theme.secondary,
	},
	headerBox: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	bar1: {
		marginTop: "0.5rem",
		width: "4.5rem",
		backgroundColor: theme.secondary,
		height: "0.1rem",
		textAlign: "center",
		borderRadius: "0.1rem",
	},
	bar2: {
		marginTop: "0.25rem",
		width: "3rem",
		backgroundColor: theme.secondary,
		height: "0.15rem",
		textAlign: "center",
	},
}));

export default function MultipleItems({ heading, elements, ...props }) {
	const classes = useStyles();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};
	return (
		<Box className={classes.container} id={props.id}>
			<Box mt={5} mb={3} className={classes.headerBox}>
				<Typography variant="h4" className={classes.header}>
					{heading}
				</Typography>
				<div className={classes.bar1}></div>
				<div className={classes.bar2}></div>
			</Box>
			<Box mt={4} p={4} textAlign="center">
				<Slider {...settings}>
					{elements.map((elem) => {
						return (
							// <div>
							<CustomCard image={elem.img} text={elem.text} />
							// </div>
						);
					})}
				</Slider>
			</Box>
		</Box>
	);
}
