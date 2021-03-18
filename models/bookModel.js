const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    _id: {
        type: String
    },

    title: {
        type: String,
        trim: true
       
    },

    authors: {
        type: String,
        trim: true
    },

    description: {
        type: String,
        trim: true

    },

    image: {
        type: String
    },

    link: {
        type: String
    }

})

const Book = mongoose.model("Books", BookSchema);

module.exports = Book;