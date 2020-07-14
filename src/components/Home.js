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
import noimage from "../assests/noimage.png";
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

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [userId, setUserId] = useState(null);
  const [feed, setFeed] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        console.log("I am in home and here is the user", user.uid);
        axios.get("http://localhost:3001/rss").then((res) => {
          console.log("in useeffect", res);
          let cards = [];
          res.data.items.forEach((item) => {
            // console.log(item["media:content"].$.url);
            let url = noimage;
            if (item["media:content"] !== undefined) {
              url = item["media:content"].$.url;
            }
            cards.push(
              <Grid item xs={12} sm={6} lg={4} className={classes.mar}>
                <SimpleCard
                  contentSnippet={item.contentSnippet}
                  title={item.title}
                  pubDate={item.pubDate}
                  image={url}
                />
              </Grid>
            );
          });
          console.log(cards);
          setCards(cards);
          console.log(feed);

          // fetch("https://www.theguardian.com/international/rss").then(function (
          //   feedNews
          // ) {
          //   console.log("feedNews", feedNews);
          // });
        });
      } else {
        setUserId(null);
      }
    });
  }, []);
  let spin = (
    <div className={classes.root}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>
  );
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Grid container>{cards ? cards : spin}</Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
