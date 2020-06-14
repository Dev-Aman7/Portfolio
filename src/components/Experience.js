import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makestyles from "@material-ui/styles/makeStyles";

import ExperienceCard from "./atoms/ExperienceCard";
import Bene from "../assets/images/bene.png";
import Bar from "../assets/images/bar.png";
import ISA from "../assets/images/isa.jpeg";
import CodePark from "../assets/images/CodePark.jpeg";

const useStyles = makestyles((theme) => ({
	container: {
		// height: "100vh",
		paddingLeft: "2rem",
		paddingRight: "2rem",
		paddingBottom: "2rem",
	},
	header: {
		color: theme.header,
		fontWeight: theme.bolder,
	},
	gridItem: {
		display: "flex",
		justifyContent: "center",
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
		backgroundColor: theme.backgroundColor,
		height: "0.1rem",
		textAlign: "center",
		borderRadius: "0.1rem",
	},
	bar2: {
		marginTop: "0.25rem",
		width: "3rem",
		backgroundColor: theme.backgroundColor,
		height: "0.15rem",
		textAlign: "center",
	},
}));

export default function Experience() {
	const classes = useStyles();
	return (
		<Box className={classes.container} id="EXPERIENCES">
			<Box mt={5} mb={3} className={classes.headerBox}>
				<Typography variant="h4" className={classes.header}>
					EXPERIENCES
				</Typography>
				<div className={classes.bar1}></div>
				<div className={classes.bar2}></div>
			</Box>
			<Grid container>
				<Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
					<ExperienceCard
						image={ISA}
						dates="APR 2017- APR 2018"
						heading="PROJECT HEAD ISA-VIT"
						text="Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica species,
						"
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
					<ExperienceCard
						image={CodePark}
						dates="SEP 2017- JAN 2018"
						heading="FOUNDER, CodePark"
						text="Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica species,
					"
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
					<ExperienceCard
						image={Bene}
						dates="APR 2020- JUN 2020"
						heading="Full Stack Intern at Bene"
						text="Lizards are a widespread group of squamate reptiles, with over 6,000
				species, ranging across all continents except Antarctica species,
				"
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
