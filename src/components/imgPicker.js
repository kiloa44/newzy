import React, { Component } from "react";
import ImagePicker from "react-image-picker";
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
    };
  }

  onPickImages(images) {
    this.setState({ images });
  }

  render() {
    const imageList = [guardian, nytimes];
    return (
      <div>
        <ImagePicker
          images={imageList.map((image, i) => ({ src: image, value: i }))}
          onPick={this.onPickImages.bind(this)}
          multiple
        />
        <button type="button" onClick={() => console.log(this.state.images)}>
          OK
        </button>
      </div>
    );
  }
}

export default MyImgPicker;
