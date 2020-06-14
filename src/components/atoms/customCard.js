import React from "react";
import { Box, Typography } from "@material-ui/core";

import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: "40px 40px",
		boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.2)",
		borderRadius: "10px",
		margin: "1rem",
	},
}));

export default function Card({ image, text, ...props }) {
	const classes = useStyles();
	return (
		<Box className={classes.container}>
			<div>
				<img src={image} alt={text} height="128px" />
			</div>
			<div>
				<Typography>{text}</Typography>
			</div>
		</Box>
	);
}
