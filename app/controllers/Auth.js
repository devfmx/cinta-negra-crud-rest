const { signup,login } = require("../actions");


const SignUp = (req, res) => {

	signup(req.body).then(
		token => res.status(201).json({ "message": "User created successfully", token: token })
	).catch(e => res.status(400).send(e));


};

const LogIn = (req, res) => {
	login(req.body)
		.then(token => res.status(200).json({ "message": "User logged successfully", token: token }))
		.catch(e => res.status(400).send(e));
};



module.exports = {
	SignUp,
	LogIn
};