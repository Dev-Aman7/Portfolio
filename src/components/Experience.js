import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makestyles from "@material-ui/styles/makeStyles";

import ExperienceCard from "./atoms/ExperienceCard";
import Bene from "../assets/images/bene.png";
import TCS from "../assets/images/TCS.jpg";
// import Bar from "../assets/images/bar.png";
import ISA from "../assets/images/isa.jpeg";
import CodePark from "../assets/images/CodePark.jpeg";
import ByteAvenue from "../assets/images/byteavenue.png";

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
      <Grid container style={{ justifyContent: "center" }}>
        <Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
          <ExperienceCard
            image={ByteAvenue}
            dates="FEB 2018- present"
            heading="Co-founder & CTO"
            text="Developing, implementing, managing and evaluating the company's technology resources."
          />
        </Grid>
        <Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
          <ExperienceCard
            image={TCS}
            dates="OCT 2020- MAY 2022"
            heading="System Engineer"
            text="Developed and managed frontend of multiple website development from the initial stage to the completion stage."
          />
        </Grid>
        <Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
          <ExperienceCard
            image={CodePark}
            dates="MAR 2028- JUN 2020"
            heading="Co-founder"
            text="Primarily worked on forming the team, growing the MVP, defining specifications, and bringing product into life. "
          />
        </Grid>
        <Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
          <ExperienceCard
            image={ISA}
            dates="APR 2017- APR 2018"
            heading="PROJECT HEAD ISA-VIT"
            text="Lead an extraordinary group of enthusiasts technocrats who have the ability to change world and continuously working on this practice."
          />
        </Grid>
        <Grid item md={4} xs={12} sm={12} className={classes.gridItem}>
          <ExperienceCard
            image={Bene}
            dates="APR 2020- JUN 2020"
            heading="Full Stack Intern at Bene"
            text="Full stack development with the sugar of innovation and creativity to build real-life projects with high performance and low maintenance."
          />
        </Grid>
      </Grid>
    </Box>
  );
}
