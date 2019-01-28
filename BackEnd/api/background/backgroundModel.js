const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BackGroundSchema = new Schema({
    title: {type: String},
    image : {type: String, required: true, unique: true}
})

module.exports = mongoose.model("backgrounds", BackGroundSchema);
 