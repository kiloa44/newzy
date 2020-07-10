import React, { useState, useEffect } from "react";
import * as Parser from "rss-parser";

let parser = new Parser();

// blueprint for the properties
export default function App() {
  const [feed, setFeed] = useState({});

  useEffect(() => {
    async function FetshData() {
      const res = await parser.parseURL("https://www.reddit.com/.rss");
      setFeed(res);
    }
    FetshData();
  }, []);

  return (
    <div>
      <h1>RSS Feed</h1>
      feed.map((item, i) => (
      <div key={i}>
        <h1>item.title</h1>
        <a href="">item.link</a>
      </div>
      ))
    </div>
  );
}
