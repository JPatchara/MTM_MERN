const mongoose = require('mongoose')
const schema = mongoose.Schema

const moviesModel = new schema({
    name: { type: String, required: true },
    tagline: { type: String },
    price: { type: Number, required: true },
    image: { type: String }
})

// moviesModel.set('collection', 'moviesList')

module.exports = mongoose.model('movieslists', moviesModel)