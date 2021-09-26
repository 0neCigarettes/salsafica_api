const mongoose = require('mongoose')
const moment = require('moment');

const mongoSchema = mongoose.Schema({
	name: String,
	username: String,
	password: String,
	address: String,
	phone: String,
	created_at: {
		type: Date,
		default: new Date().toISOString()
	}
})

module.exports = mongoose.model('users', mongoSchema)
