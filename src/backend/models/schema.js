import mongoose from "mongoose";
const articleSchema = new mongoose.Schema({
    genre: [String],
    title:{
        type: String,
        required: true,
    },
     body: {
        type: String,
        required: true
     },
     author: {
        type: String,
        default: "Anonymous"
     },
     date: {
        type: Date,
        default:Date.now
     },
     views:{
        type: Number,
        default: 0
     }
});

const Post = mongoose.model("Post", articleSchema);
export default Post;

