import React, { useState, useEffect } from "react";
// import * as Feed from "rss-to-json";
var Parser = require("rss-parser");

// blueprint for the properties
export default function News() {
  const [feed, setFeed] = useState({});

  useEffect(() => {
    var parser = new Parser();
    parser.parseURL("https://www.theguardian.com/international/rss", function (
      err,
      feedNews
    ) {
      console.log("in Parser parseURL");
      console.log(feedNews);
      setFeed(feedNews);
    });
    // async function FetshData() {
    //   Feed.load('https://www.theguardian.com/international/rss')
    //     .then((rss) => {
    //       const res = JSON.stringify(rss, null, 3);
    //       console.log(res);
    //       setFeed(res);
    //     })
    //     .catch((err) => console.log(err));
    // }
    // FetshData();
  }, []);

  return (
    <div>
      <h1>RSS Feed</h1>
      {feed.map((item) => {
        return (
          <div>
            <h1>item.title</h1>
            <a href="#">item.link</a>
          </div>
        );
      })}
    </div>
  );
}
