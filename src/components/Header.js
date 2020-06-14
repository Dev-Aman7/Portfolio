import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

import firstImage from "../assets/images/header-background.png";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	header: {
		height: "90vh",
		backgroundColor: theme.backgroundColor,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		color: theme.secondary,
		// position: "relative",
		// textAlign: "center",
		// top: "45%",
	},
	firstHeading: {
		fontSize: theme.f1,
		fontWeight: theme.bold,
		textAlign: "center",
	},
	secondHeading: {
		fontWeight: theme.bold,
	},
	content: {},
	btn: {
		background: theme.secondary,
		color: theme.backgroundColor,
		padding: "11px 30px",
		borderRadius: "2rem",
		marginTop: "2.5rem",
		"&:hover": {
			color: theme.backgroundColor,
			background: theme.secondary,
		},
	},
}));

export default function Header() {
	const classes = useStyles();
	return (
		<div>
			<Box className={classes.header}>
				<Typography className={classes.firstHeading}>HELLO</Typography>
				<Typography className={classes.firstHeading}>I'M Aman Kumar</Typography>
				<Typography className={classes.secondHeading}>WEB DEVELOPER</Typography>
				<Button className={classes.btn}> HAVE PROJECT? LET'S TALK</Button>
			</Box>
		</div>
	);
}
