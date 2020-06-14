import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makestyles from "@material-ui/styles/makeStyles";

import ExperienceCard from "./atoms/ExperienceCard";
import Bar from "../assets/images/bar.png";
import frontend from "../assets/images/frontend.png";
import backend from "../assets/images/backend.png";
import support from "../assets/images/support.png";

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
		marginBottom: "1rem",
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

export default function Service() {
	const classes = useStyles();
	return (
		<Box className={classes.container} id="SERVICES">
			<Box mt={5} mb={3} className={classes.headerBox}>
				<Typography variant="h4" className={classes.header}>
					MY SERVICES
				</Typography>
				<div className={classes.bar1}></div>
				<div className={classes.bar2}></div>
				{/* <img src={Bar} /> */}
			</Box>
			<Grid container>
				<Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
					<ExperienceCard
						image={backend}
						dates=""
						heading="FRONTEND DEVELOPMENT"
						text="Expertise in building responsive designer website with high customizability.
						"
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
					<ExperienceCard
						image={frontend}
						dates=""
						heading="BACKEND DEVELOPMENT"
						text="Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica species,
					"
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
					<ExperienceCard
						image={support}
						dates=""
						heading="SUPPORT"
						text="Lizards are a widespread group of squamate reptiles, with over 6,000
				species, ranging across all continents except Antarctica species,
				"
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
