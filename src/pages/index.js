import React from "react";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Fab from "@material-ui/core/Fab";

import ThemeContext from "../utils/ThemeContext";

const useStyles = makeStyles((theme) => ({
  float: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: 100000,
  },
}));

// import HideOnScroll from "../hooks/HideOnScroll";

const Index = function () {
  const classes = useStyles();
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
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <>
            {/* <IconButton>
							{theme === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
							Change
						</IconButton> */}
            <Fab
              color="primary"
              aria-label="add"
              className={classes.float}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
            </Fab>
            {/* <ListItem button key={"text"} >
							<ListItemIcon>
								
							</ListItemIcon>
							<ListItemText primary={"Toggle theme"} />
						</ListItem> */}
          </>
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

export default Index;
