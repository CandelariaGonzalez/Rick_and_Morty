const favoriteRouter = require('express').Router();
const {postFav, deleteFav, getFav} = require("../controllers/handleFavorites")



favoriteRouter.get('/', getFav)

favoriteRouter.post('/', postFav)

favoriteRouter.delete('/:id', deleteFav)

module.exports = favoriteRouter;
