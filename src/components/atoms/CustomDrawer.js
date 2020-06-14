import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import ThemeContext from "../../utils/ThemeContext";

const useStyles = makeStyles((theme) => ({
	drawer: {},
	list: {
		width: 250,
		background: theme.backgroundColor,
		color: theme.secondary,
		height: "100vh",
	},
	fullList: {
		width: "auto",
	},
}));

export default function TemporaryDrawer(props) {
	const classes = useStyles();

	const list = () => (
		<div
			className={classes.list}
			role="presentation"
			// onClick={props.toggleDrawer}
			// onKeyDown={props.toggleDrawer}
		>
			<IconButton onClick={props.toggleDrawer}>
				<ArrowBackIosIcon />
			</IconButton>
			{/* <Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List> */}
			<Divider />
			<ThemeContext.Consumer>
				{({ theme, toggleTheme }) => (
					<>
						{/* <IconButton>
							{theme === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
							Change
						</IconButton> */}
						<ListItem button key={"text"} onClick={toggleTheme}>
							<ListItemIcon>
								{theme === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
							</ListItemIcon>
							<ListItemText primary={"Toggle theme"} />
						</ListItem>
					</>
				)}
			</ThemeContext.Consumer>
		</div>
	);

	return (
		<div>
			{/* <Button onClick={toggleDrawer()}>{anchor}</Button> */}
			<Drawer
				anchor="left"
				open={props.open}
				onClose={props.toggleDrawer}
				className={classes.drawer}
			>
				{list()}
			</Drawer>
		</div>
	);
}
