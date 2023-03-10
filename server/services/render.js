const axios = require("axios");

exports.homeRoute = (req, res) => {
  axios
    .get("http://localhost:3000/api/articles")
    .then((result) => {
      res.render("index", { articles: result.data });
    })
    .catch((e) => console.log("error"));
};

exports.add_article = (req, res) => {
  res.render("add_article");
};

exports.update_article = (req, res) => {
  // console.log(req.port);
  axios
    .get("http://localhost:3000/api/articles", { params: { id: req.query.id } })
    .then((data) => {
      res.render("update_article", { article: data.data });
    })
    .catch((err) => {
      console.log("error");
    });
};

exports.show_article = (req, res) => {
  axios
    .get("http://localhost:3000/api/articles?id=" + req.query.id)
    .then((data) => {
      res.render("show_article", { article: data.data });
    })
    .catch((err) => {
      console.log("err ==> " + err);
    });
};
