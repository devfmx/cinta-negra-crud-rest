const {
	createPost,
	getAllPost,
	getPostByCategory,
	getPostsByTag,
	getPostById,
	updatePostById,
	deletePostById,
	getAllPostAndAuthor,
	addPostToUser
} = require("../actions");


const createPosts = (req, res) => {
	req.body.author = req.user._id;
	createPost(req.body).then((post) => {
		addPostToUser(req.user._id, post._id).then(() => {
			res.status(201).json(post);
		}).catch(e => res.status(400).json(e));
	}).catch(e => res.status(400).json(e));
};

const getPosts = async (req, res) => {
	const posts = req.query.tag ? await getPostsByTag(req.query.tag)
		: req.query.category ? await getPostByCategory(req.query.category)
			: await getAllPost();
	res.status(200).json(posts);
};


const getOnePost = (req, res) => {
	getPostById(req.params.id).then((post) => {
		if (!post) res.status(404).json({ "message": "Post does not exist" });
		res.status(200).json(post);
	}).catch(e => res.status(400).json(e));

};

const updatePost = (req, res) => {
	updatePostById(req.params.id, req.body).then((post) => {
		if (!post) res.status(404).json({ "message": "Post does not exist" });
		res.status(200).json(post);
	}).catch(e => res.status(400).json(e));
};


const deletePost = (req, res) => {
	deletePostById(req.params.id).then((user) => {
		if (!user) res.status(404).json({ "message": "Post does not exist" });
		res.status(200).json({ "message": "Post deleted seccessfully" });
	}).catch((e) => {
		res.status(400).json(e);
	});
};


const newsFeed = (req, res) => {
	getAllPostAndAuthor().then((posts) => {
		return res.status(200).json(posts);
	}).catch((e) => {
		return res.status(400).json(e);
	});
};


module.exports = {
	createPosts,
	getPosts,
	getOnePost,
	updatePost,
	deletePost,
	newsFeed
};