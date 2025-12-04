import Post from '../models/schema.js';

//fetch all posts from the database

export const getPosts = async (req, res)=>{
    const {tag} = req.query;
    let filter={};
    if(tag) filter.genre=tag;
    try{
        const posts=await Post.find(filter).sort({date: -1}).limit(10);
        res.json(posts)
    }
    catch(err){
        console.log('Error fetching the data', err);
    }
};

export const addPosts = async(req,res)=>{
    try{
       const savePost=await Post.create(req.body);
       res.status(201).json(savePost);
    }
    catch(e){
         console.error("could not save the data to the database",e);
         res.status(500).json({error: e});
    }
};
