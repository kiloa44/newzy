var Parser = require("rss-parser");

var appRouter = function (app) {
  app.get("/rss", function (req, res) {
    // res.status(200).send("Welcome to our restful API");
    var parser = new Parser({
      customFields: {
        item: ["media:content"],
      },
    });
    let urls = [
      "https://www.theguardian.com/international/rss",
      "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
      "https://www.e-ir.info/feed/",
    ];
    parser
      .parseURL(urls[1], function (err, feedNews) {
        console.log("in Parser parseURL");
        console.log(feedNews);
        res.status(200).send(feedNews);
      })
      .catch((err) => {
        console.log("in routes.js there is ", err);
      });
  });
};

module.exports = appRouter;
