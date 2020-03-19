const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authorsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a cconnection to the database"))
    .catch(error => console.log("Something went wrong when connecting to the database", error));