import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActionArea from "@material-ui/core/CardActionArea";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
let cardStyle = {
  display: "block",
  width: "30vw",
  transitionDuration: "0.3s",
  height: "45vw",
};
function iconStyles() {
  return {
    pressed: {
      color: "red",
    },
    notPressed: {
      color: "inherit",
    },
  };
}

export default function SimpleCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [num, setNum] = React.useState(0);
  const [color, setColor] = React.useState("inherit");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => (window.location.href = props.link)}>
        <CardHeader
          //         avatar={
          //             <Avatar aria-label="recipe" className={classes.avatar}>
          //                 R
          //   </Avatar>
          //         }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={props.title}
          subheader={props.pubDate}
        />
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography
            noWrap
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.contentSnippet}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            color={color}
            onClick={() => {
              console.log(num);
              setNum((c) => c + 1);
              if (num % 2 == 0) {
                setColor("secondary");
              } else {
                setColor("inherit");
              }
            }}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
