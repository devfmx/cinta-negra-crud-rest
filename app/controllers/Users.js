const { getAllUsers, getUserById, updateUserById, deleteUserById } = require("../actions");



const getUsers = (req, res) => {
	getAllUsers().then((users) => {
		res.status(200).json(users);
	}).catch((e) => {
		res.status(400).json(e);
	});
};


const getUser = (req, res) => {

	getUserById(req.params.id).then((user) => {
		if (!user) res.status(404).json({ "message": "User does not exist" });
		res.status(200).json(user);
	}).catch((e) => {
		res.status(400).json(e);
	});

};

const updateUser = (req, res) => {
	updateUserById(req.params.id, req.body).then((user) => {
		if (!user) res.status(404).json({ "message": "User does not exist" });
		res.status(200).json(user);
	}).catch((e) => {
		res.status(400).json(e);
	});

};

const deleteUser = (req, res) => {
	deleteUserById(req.params.id).then((user) => {
		if (!user) res.status(404).json({ "message": "User does not exist" });
		res.status(200).json({ "message": "User deleted seccessfully" });
	}).catch((e) => {
		res.status(400).json(e);
	});
};


const me = (req, res) => {
	res.status(200).json(req.user);
};

const updateMe = (req, res) => {
	updateUserById(req.user._id, req.body).then((user) => {
		if (!user) res.status(404).json({ "message": "User does not exist" });
		res.status(200).json(user);
	}).catch((e) => {
		res.status(400).json(e);
	});

};


module.exports = {
	getUsers,
	getUser,
	updateUser,
	deleteUser,
	me,
	updateMe
};