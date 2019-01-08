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

const getUserById = (id) => {
	return User.findOne({_id:id,is_active:true}).select("-password");
};

const getAllUsers = () => {
	return User.find({is_active:true}).select("-password");
};

const updateUserById = (id,data) =>{
	return User.findByIdAndUpdate(id,{$set:data},{new:true}).select("-password");
};

const deleteUserById =  (id)  => {
	return User.findByIdAndUpdate({_id:id,is_active:true},{$set:{is_active:false}},{new:true});
};


module.exports = {
	createUser,
	getUserByEmail,
	getUserById,
	getAllUsers,
	updateUserById,
	deleteUserById
};