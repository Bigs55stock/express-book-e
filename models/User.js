// require the mongoose package from the connection pool
const mongoose = require('../db/connection');
const Schema = mongoose.Schema

// make a new schema with 2 properties, and assign it to a variable
const UserSchema = new Schema({
	email: String,
	name: String,
});

// instantiate the model, calling it "Bookmark" and with the schema we just made
const User = mongoose.model('User', UserSchema);

// export the newly created model
module.exports = User;
