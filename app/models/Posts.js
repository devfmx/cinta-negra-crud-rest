
const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const PostSchema = new Schema({

	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	category: {
		type: String,
		enum: ["TECH", "DEV", "GAME", "HEALTH"]
	},
	tags: [{
		type: String
	}],

	Likes: {
		type: Number,
		default: 0
	},

	is_active: {
		type: Boolean,
		default: true
	}

}, { "collection": "posts", "timestamps": true });


module.exports = mongoose.model("posts", PostSchema);
