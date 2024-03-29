import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makestyles from "@material-ui/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// import Bar from "../assets/images/bar.png";
// import AboutImage from "../assets/images/about-me-image.jpg";
import AboutImage from "../assets/images/about.jpg";

import Resume from "../assets/pdf/Aman_Kumar.pdf";

const useStyles = makestyles((theme) => ({
  container: {
    // marginTop: "25rem",
    // height: "100vh",
  },
  header: {
    color: theme.header,
    fontWeight: theme.bolder,
  },
  text: {
    color: theme.text,
    borderBottom: `1px ${theme.text} dashed`,
    paddingBottom: "2rem",
  },
  subItem: {
    color: theme.text,
    paddingBottom: "2rem",
  },
  image: {
    width: "100%",
    height: "70vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("sm")]: {
      height: "85vh",
    },
  },
  btn: {
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    paddingLeft: "3.5rem",
    paddingRight: "3.5rem",
    color: theme.secondary,
    background: theme.backgroundColor,
    borderRadius: "2rem",
    marginTop: "1rem",
    "&:hover": {
      color: theme.backgroundColor,
      background: theme.secondary,
      "& > .link": {
        color: "red",
      },
    },
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
    height: "0.15rem",
    textAlign: "center",
    borderRadius: "0.1rem",
  },
  bar2: {
    marginTop: "0.25rem",
    width: "3rem",
    backgroundColor: theme.backgroundColor,
    height: "0.1rem",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: theme.secondary,
    "&:hover": {
      color: theme.backgroundColor,
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Box className={classes.container} id="ABOUT">
      <Box mt={5} mb={3} className={classes.headerBox}>
        <Typography variant="h4" className={classes.header}>
          ABOUT ME
        </Typography>
        <div className={classes.bar1}></div>
        <div className={classes.bar2}></div>
      </Box>
      <Grid container>
        <Grid item md={4} xs={12} sm={12}>
          <img src={AboutImage} alt="about me " className={classes.image} />
        </Grid>
        <Grid item md={8} xs={12} sm={12}>
          <Box pt={9} px={7}>
            <Typography className={classes.text}>
              A problem solver who likes technology, with MERN proficiency as a
              full stack developer. I am a highly motivated and progress-focused
              person, with a track record of initiative and dependability. I
              have devised strategic initiatives which I believe will prove
              valuable to your esteemed organization.
            </Typography>
            <Box mt={5} mb={2}>
              <Grid container>
                <Grid item md={5} xs={12} sm={12}>
                  <Typography className={classes.subItem}>
                    NAME : Aman Kumar{" "}
                  </Typography>
                  <Typography className={classes.subItem}>AGE : 24</Typography>
                </Grid>
                <Grid item md={5} xs={12} sm={12}>
                  <Typography className={classes.subItem}>
                    JOB TITLE : Full Stack Developer{" "}
                  </Typography>
                  <Typography className={classes.subItem}>
                    LOCATION : Banglore, INDIA
                  </Typography>
                </Grid>
                <Grid item md={5} xs={12} sm={12}>
                  <a
                    href={Resume}
                    download="Aman_Kumar.pdf"
                    className={classes.link}
                  >
                    <Button className={classes.btn}> DOWNLOAD CV</Button>
                  </a>
                </Grid>
                <Grid item md={5} xs={12} sm={12}>
                  <Button
                    className={classes.btn}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/dev-aman/",
                        "_blank"
                      )
                    }
                  >
                    HIRE ME
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
