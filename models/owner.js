// models/owner.js
const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: String,
    photo: String, // You can store the URL or file path of the owner's photo
    details: String,
    position: String
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
