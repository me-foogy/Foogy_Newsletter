import express from "express";
import {getPosts, addPosts, updatePostViews} from '../controller/postController.js';

const router = express.Router();

router.get('/', getPosts); //fetch all the posts from the database
router.post('/', addPosts); //add a new post to the database
router.put('/', updatePostViews) //update if read more is clicked

export default router;