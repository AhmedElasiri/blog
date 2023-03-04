const articledb = require("../model/model");

exports.create = (req, res) => {
  // new article
  const article = new articledb({
    title: req.body.title,
    description: req.body.description,
  });
  // save article in the database
  article
    .save(article)
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(`==> error ${err}`);
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    articledb
      .findById(req.query.id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    articledb
      .find()
      .then((articles) => {
        res.send(articles);
      })
      .catch((err) => {
        res.send("err ===>");
      });
  }
};

exports.update = (req, res) => {
  articledb
    .findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      res.redirect("/")
    })
    .catch((err) => {
      console.log("error ===>" + err);
    });
};

exports.delete = (req, res) => {
  articledb
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(`==> error: ${err}`);
    });
};
