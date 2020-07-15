import React, { Component } from "react";
import ImagePicker from "react-image-picker";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "react-image-picker/dist/index.css";

//import images from local
import nytimes from "../assests/newyork.png";
import guardian from "../assests/TheGuardian.png";

class MyImgPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      images: [],
      redirect: false,
    };
  }

  onPickImages(images) {
    this.setState({ images });
  }

  render() {
    const imageList = [guardian, nytimes];
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Grid container justify="center" direction="column">
        <Grid item>
          <ImagePicker
            images={imageList.map((image, i) => ({ src: image, value: i }))}
            onPick={this.onPickImages.bind(this)}
            multiple
          />
        </Grid>
        <Grid item display="flex" justify="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.setState({ redirect: true });
            }}
          >
            OK
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default MyImgPicker;
