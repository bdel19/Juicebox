const express = require('express');
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});
const { getAllTags, getPostsByTagName } = require('../db');

tagsRouter.get('/:tagName/posts', async (req,res) => {
    const {tagName} = req.params; 
    try{
        const postByTags = await getPostsByTagName(tagName);
        res.send({postByTags});
    }catch ({name, message}){
        next({name, message});
    }

});

module.exports = tagsRouter;