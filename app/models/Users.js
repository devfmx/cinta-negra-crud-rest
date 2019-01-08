const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const UserSchema = new Schema({

	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	birth_date: {
		type: Date
	},
	gender: {
		type: String,
		enum: ["Male", "Female"]
	},
	subscription_id: {
		type: Schema.Types.ObjectId,
		ref: "subscriptions"
	},
	posts: [
		{
			type: Schema.Types.ObjectId,
			ref: "posts"
		}
	],

	Liked: [
		{
			type: Schema.Types.ObjectId,
			ref: "posts"
		}
	],
	

	is_active: {
		type: Boolean,
		default: true
	}

}, { "collection": "users", "timestamps": true });


module.exports = mongoose.model("users", UserSchema);
