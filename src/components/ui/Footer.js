import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import FooterAdornment from "../../assets/Footer Adornment.svg";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    right: "1.5em",
    marginTop: "-6em",

    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));
const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => props.setValue(0)}
                component={Link}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue(1)}
              >
                Revolution
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue(1)}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue(1)}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to="/revolution"
                className={classes.link}
                onClick={() => props.setValue(1)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                onClick={() => {
                  props.setValue(2);
                  props.setSelectedIndex(0);
                }}
                item
                component={Link}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                onClick={() => {
                  props.setValue(2);
                  props.setSelectedIndex(1);
                }}
                item
                component={Link}
                to="/software"
                className={classes.link}
              >
                Custome Software Development
              </Grid>
              <Grid
                onClick={() => {
                  props.setValue(2);
                  props.setSelectedIndex(2);
                }}
                item
                component={Link}
                to="/mobile"
                className={classes.link}
              >
                Mobile App Development
              </Grid>
              <Grid
                onClick={() => {
                  props.setValue(2);
                  props.setSelectedIndex(3);
                }}
                item
                component={Link}
                to="/websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                onClick={() => props.setValue(3)}
                item
                component={Link}
                to="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                onClick={() => props.setValue(3)}
                item
                component={Link}
                to="/about"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                onClick={() => props.setValue(3)}
                item
                component={Link}
                to="/about"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                onClick={() => props.setValue(4)}
                item
                component={Link}
                to="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        src={FooterAdornment}
        alt="black decorative slash"
      ></img>
      <Grid
        container
        spacing={2}
        justify="flex-end"
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Facebook} alt="facebookLogo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Twitter} alt="twitter-logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.Instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={Instagram} alt="instagram-logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
