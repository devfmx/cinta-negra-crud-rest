const authActions  = require("./authActions");
const userActions =  require("./userActions");


module.exports = {
	...authActions,
	...userActions
};