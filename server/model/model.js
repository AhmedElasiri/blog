const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdOn:{
    type: Date,
    default: Date.now
  }
});

const articledb = mongoose.model("article", schema);

module.exports = articledb;
