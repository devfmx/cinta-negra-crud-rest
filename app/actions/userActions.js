const bcrypt = require("bcrypt");
const User = require("../models/Users");

const SALT_FACTOR = 10;

const createUser = async (data) => {

	const salt = await bcrypt.genSalt(SALT_FACTOR);
	const hash = await bcrypt.hash(data.password, salt);
	data.password = hash;

	return User.create(data);

};

const getUserByEmail = (email) => {
	return User.findOne({email:email});
};


module.exports = {
	createUser,
	getUserByEmail
};