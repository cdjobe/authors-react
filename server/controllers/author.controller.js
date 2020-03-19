const { Author } = require('../models/author.model');

module.exports.index = ( request, response ) => {
	response.json({
		message: "Hello World"
	});
}

module.exports.createAuthor = ( request, response ) => {
	const { FirstName, LastName }  = request.body;
	Author.create({
		FirstName,
		LastName
	})
		.then(author => response.json(author))
		.catch(error => response.status(400).json(error));
}

module.exports.getAllAuthors = ( request, response ) => {
	Author.find()
		.then(allAuthors => response.json( allAuthors ))
		.catch(error => response.json( error ));
}

module.exports.getAuthor = ( request, response ) => {
	Author.find({_id:request.params.id})
		.then( author => response.json( author ))
		.catch( error => response.json( error ));
}

module.exports.updateAuthor = ( request, response ) => {
	Author.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
		.then(updatedAuthor => response.json( updatedAuthor ))
		.catch(error => response.status(400).json( error ));
}

module.exports.deleteAuthor = ( request, response ) => {
	Author.deleteOne({ _id: request.params.id })
		.then(deleteConfirmation => response.json( deleteConfirmation ))
		.catch(error => response.json( error ));
}