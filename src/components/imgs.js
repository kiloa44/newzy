import React from "react";

const Img = ({ selected, img }) => {
  const classes = selected ? "item selected" : "item";
  return (
    <div className={classes}>
      <img src={img}></img>
    </div>
  );
};

export default Img;
