import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";

import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.footerBackground,
    // padding: "0 50px",
  },
  grid: {
    // padding: "40px 50px",
    textAlign: "center",
    paddingBottom: "2rem",
    borderBottom: "1px solid #9ca1a3",
  },
  griditem: {
    margin: "1rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#9ca1a3",
  },
  social: {
    color: "#9ca1a3",
    display: "flex",
    justifyContent: "space-evenly",
  },
  copyright: {
    color: "#9ca1a3",
    margin: "3rem 0",
  },
  socialicon: {
    color: "#9ca1a3",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.container} id="CONTACT">
      <Box p={7}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} md={4} sm={12} className={classes.griditem}>
            <CallIcon /> &nbsp; (+91) 9087771296
          </Grid>
          <Grid item xs={12} md={4} sm={12} className={classes.griditem}>
            <EmailIcon /> &nbsp; aman.kumar.6170@gmail.com
          </Grid>
          <Grid item xs={12} md={4} sm={12} className={classes.griditem}>
            <LocationOnIcon /> &nbsp; Banglore, INDIA
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Box className={classes.social}>
            <IconButton
              onClick={() =>
                window.open("https://www.facebook.com/aman.dev.718", "_blank")
              }
            >
              <FacebookIcon className={classes.socialicon} />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://twitter.com/Dev_Aman7", "_blank")
              }
              className={classes.socialicon}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.instagram.com/dev_aman7/", "_blank")
              }
              className={classes.socialicon}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://www.linkedin.com/in/dev-aman/", "_blank")
              }
              className={classes.socialicon}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Box className={classes.copyright}>
            Copyright @ 2020-21 Aman Kumar, All rights reserved
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
