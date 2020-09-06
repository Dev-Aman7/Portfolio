import React from "react";

// import Brightness4Icon from "@material-ui/icons/Brightness4";
// import Brightness7Icon from "@material-ui/icons/Brightness7";
// import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../components/About";
import Skill from "../components/Skill";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Services from "../components/Services";
import Footer from "../components/Footer";
// import Fab from "@material-ui/core/Fab";

// const useStyles = makeStyles((theme) => ({
//   float: {
//     position: "absolute",
//     zIndex: 1000,
//   },
// }));

// import HideOnScroll from "../hooks/HideOnScroll";

const index = (props) => {
  //   const classes = useStyles();
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
      {/* <Fab color="primary" aria-label="add" className={classes.float}>
        <Brightness4Icon />
      </Fab> */}
    </div>
  );
};

export default index;
