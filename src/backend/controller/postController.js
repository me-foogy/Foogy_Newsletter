import Post from '../models/schema.js';

//fetch all posts from the database

export const getPosts = async (req, res)=>{
    const {tag} = req.query;
    let filter={};
    if(tag) filter.genre=tag;
    if(tag==="TRENDING"){
        try{
            const posts=await Post.find().sort({views: -1}).limit(10);
            res.json(posts)
        }
        catch(err){
            console.log('Error fetching the data', err);
        }
    }
    else{
        try{
            const posts=await Post.find(filter).sort({date: -1}).limit(10);
            res.json(posts)
        }
        catch(err){
            console.log('Error fetching the data', err);
        }
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

export const updatePostViews = async(req, res)=>{
    const {id} = req.query;
    try{
        await Post.findByIdAndUpdate(id,{$inc: {views:1}});
        console.log("views updated successfully");
        res.status(200).json({message: 'The data has been updated'});

    }
    catch(e){
        console.error("error in updating the req");
        res.status(500).json({error: e});
    }
}
