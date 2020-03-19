const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
	app.get('/api', AuthorController.index);
	app.post('/api/createAuthor', AuthorController.createAuthor);
	app.get('/api/getAllAuthors', AuthorController.getAllAuthors);
	app.get('/api/getAuthor/:id', AuthorController.getAuthor);
	app.put('/api/updateAuthor/:id', AuthorController.updateAuthor);
	app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor);
}
