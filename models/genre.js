//import mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//String SchemaType called name to descibe the genre
const GenreSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// declare virtual url
GenreSchema.virtual("url").get(function () {
    return `/catalog/genre/${this._id}`;
});

//export
module.exports = mongoose.model("Genre", GenreSchema);
