'use strict';

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Article = mongoose.model('Article');

/* GET home page. */
router.get('/', (req, res, next) => {
  Article.find({}, (err, articles) => {
    if (err) return res.render('500');
    res.render('index', {
      title: 'Articles',
      articles: articles
    });
  });
});

module.exports = router;
