var data = require("../data.json");

exports.addFriend = function (request, response) { 

	var addName = request.query.name;
	var addDescription = request.query.description;

	var newFriend = {
		'name': addName,
		'description': addDescription,
		'imageURL': 'http://lorempixel.com/400/400/people'
	}
	
	data.friends.push(newFriend);
	console.log(data);
	response.render('index', data);
}