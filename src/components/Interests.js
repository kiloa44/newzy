import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as firebase from "firebase";
import SimpleCard from "./Card";
import { red } from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import News from "./Parser";
import axios from "axios";
import guardian from "../assests/TheGuardian.png";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Newzy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mar: {
    marginBottom: theme.spacing(2),
  },
}));
const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  borderRadius: 16,
  style: { width: "35rem", height: "15rem" },
};

export default function Interest() {
  const classes = useStyles();
  const history = useHistory();
  const [userId, setUserId] = useState(null);
  const [websites, setWebsites] = useState([]);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        console.log("I am in interest page and here is the user", user.uid);
      } else {
        setUserId(null);
      }
    });
  }, []);
  let spin = (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/*!userId ? history.push("/signin") : console.log("there is no user")*/}
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Tell us you interests
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container maxWidth="lg">
            <Box borderRadius={16} {...defaultProps}>
              <img
                src={guardian}
                alt="The Guardian Logo"
                height={250}
                width={500}
                {...defaultProps}
                borderRadius={16}
              ></img>
            </Box>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
