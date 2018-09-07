const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Post model
const Post = require('../../models/Post');

//validation
const validatePostInput = require('../../validation/post');

//@route  GET api/posts
//@desc   Get my posts
//@access Public
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json({ nopostsfound: 'No posts found' }));
});

//@route  POST api/posts
//@desc   Insert text
//@access Private
router.post('/', (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  //check validation
  if (!isValid) {
    //envio 400 si hay error
    return res.status(400).json(errors);
  }

  const newPost = new Post({
    text: req.body.text
  });

  newPost.save().then(post => {
    res.json(post);
  });
});

module.exports = router;
