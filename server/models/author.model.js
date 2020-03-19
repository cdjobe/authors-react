const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    FirstName: { type: String,
        required: [
            true,
            "First name is required."
        ]
    },
    LastName: { type: String,
        required: [
            true,
            "Last name is required."
        ]}
}, {timestamps: true});
module.exports.Author = mongoose.model('Author', AuthorSchema);