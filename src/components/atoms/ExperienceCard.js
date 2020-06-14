import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		boxShadow: " 0px 1px 10px 0px rgba(0, 0, 0, 0.24)",
		borderRadius: "0.75rem",
	},
	image: {
		objectFit: "scale-down",
	},
	content: {
		textAlign: "center",
		// padding: "1rem",
	},
	dates: {
		// marginTop: "1rem",
		marginBottom: "1rem",
		color: theme.header,
	},
	header: {
		padding: " 15px 0px",
		marginTop: "1rem",
		marginBottom: "1rem",
		color: theme.header,
		fontWeight: theme.bold,
		fontSize: "18px",
	},
	textcontent: {
		color: theme.text,
		opacity: "0.9",
		marginBottom: "2rem",
		lineHeight: "1.8",
		padding: "0.5rem",
	},
}));

export default function ExperienceCard({
	image,
	dates,
	heading,
	text,
	...props
}) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt=""
					height="200"
					image={image}
					title="Contemplative Reptile"
					className={classes.image}
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="body1" className={classes.dates}>
						{dates}
					</Typography>
					<Typography className={classes.header}>{heading}</Typography>
					<Typography variant="body2" className={classes.textcontent}>
						{text}
					</Typography>
				</CardContent>
			</CardActionArea>
			{/* <CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions> */}
		</Card>
	);
}
