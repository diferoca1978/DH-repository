const db = require('../database/models')

module.exports = {
  list: async(req, res) => {
    try {
    const movies = await db.Movie.findAll();
    return res.render('moviesList', {movies:movies});
    } catch (error) {
      console.log(error);
    } 
  }
}
