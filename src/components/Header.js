import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  InputBase,
  Hidden,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import * as firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  typographyStyle: {
    flex: 1,
  },
  iconStyle: {
    flex: 1,
  },
  logo: {
    height: 40,
    width: "auto",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "solid",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    height: "60%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        console.log("user id =>", user.uid, user);
      } else {
        setUserId(null);
      }
    });
  }, []);

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        {/*<Grid item sm={1} xs={1} />  مساحة فارغة(empty space) */}
        <Grid
          item
          container
          sm={11}
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Link to="/">
            {/*<img
              src={require('./logo.png')}
              className={classes.logo}
              alt="logo"
            />*/}
          </Link>
          <div direction="row">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <Typography className={classes.typographyStyle}>Home</Typography>{" "}
          {/* Daily deals */}
          <Typography className={classes.typographyStyle}>
            Contact Us
          </Typography>{" "}
          {/* Help */}
          <Typography className={classes.typographyStyle}>
            About US
          </Typography>{" "}
          {/* Sell */}
          {!userId ? (
            <Grid item container xs={false} sm={2} direction="row">
              <Grid item xs={6}>
                <Typography>
                  <Link
                    to="/login"
                    onClick={() => {
                      console.info("login");
                    }}
                  >
                    Login
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  <Link
                    to="/signup"
                    onClick={() => {
                      console.info("signup");
                    }}
                  >
                    Sign Up
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid item container xs={false} sm={2} direction="row">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => {
                  firebase
                    .auth()
                    .signOut()
                    .then(function () {
                      console.log("sign out successfully");
                      setUserId(null);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                Sign out
              </Button>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
