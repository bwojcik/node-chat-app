var moment = require('moment');

var generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: moment().valueOf()
	}
};

var generateLocationMessage = (from, latitute, longitude) => {
	return {
		from, 
		url: `https://www.google.pl/maps?q=${latitute},${longitude}`,
		createdAt: moment().valueOf()
	}
};

module.exports = {
	generateMessage,
	generateLocationMessage
};