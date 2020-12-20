import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import MenuIcon from "@material-ui/icons/Menu";
import developer from "../assets/images/developer.png";

// import Slide from "@material-ui/core/Slide";

import MoreIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";

import { NavHashLink as NavLink } from "react-router-hash-link";

// import CustomDrawer from "./atoms/CustomDrawer";
import HideOnScroll from "../hooks/HideOnScroll";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.backgroundColor,
    color: theme.secondary,
  },
  drawer: {
    width: 250,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  nav: {
    textDecoration: "none",
    color: theme.secondary,
  },
  mobile: {
    backgroundColor: "rgba(0, 0, 0,0.6)",
  },
  mobilenav: {
    display: "block",
    color: theme.backgroundColor,
    textDecoration: "none",
    fontWeight: theme.bold,
  },
}));
const sections = [
  "ABOUT",
  "SKILLS",
  "EXPERIENCES",
  "ACHIEVEMENTS",
  "SERVICES",
  "CONTACT",
];
export default function Nav(props) {
  const classes = useStyles();

  // const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // const toggleDrawer = () => {
  //   setOpen(!open);
  // };

  const menuId = "menu";

  const allNav = sections.map((elem) => {
    return (
      <Button>
        <NavLink smooth to={`#${elem}`} className={classes.nav}>
          {elem}
        </NavLink>
      </Button>
    );
  });
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.mobile}
    >
      {sections.map((elem) => {
        return (
          <Button className={classes.mobilenav} onClick={handleMobileMenuClose}>
            <NavLink smooth to={`#${elem}`} className={classes.mobilenav}>
              {elem}
            </NavLink>
          </Button>
        );
      })}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <img src={developer} alt="developer" height="2rem" />
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleDrawer()}
            >
              <MenuIcon />
            </IconButton> */}

            {/* <CustomDrawer open={open} toggleDrawer={toggleDrawer} /> */}

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>{allNav}</div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
