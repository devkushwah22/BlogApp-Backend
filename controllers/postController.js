const Post = require("../models/postModel");


// for creating am post
exports.createPost = async(req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({
            title, body,
        });
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        });

    } catch (error) {
        console.error("Error in createPost function:", error); // Log the error in console
        return res.status(400).json({
            error: "Error while creating post",
            message: error.message // Send detailed error message in response
        });
    }
};


// for retriving all post
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        });
    } catch (error) {
        console.error("Error in getAllPosts function:", error); // Log the error in console
        return res.status(400).json({
            error: "Error while retrieving posts",
            message: error.message // Send detailed error message in response
        });
    }
};
