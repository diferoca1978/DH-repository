const db = require('../database/models');
const sequelize = db.sequelize;


module.exports = {

  list: async(req, res) => {
    const response = {
      success : true,
      endPoint : '/api/movies', 
    }
    try {
      const data = await db.Movie.findAll()
      response.info = data
      return res.json(response) 
    } catch (error) {
      response.success = false
      response.msg = 'Hubo un error'
      return res.json(response)
    }
  },
  create: async (req, res) => {
    const response = {
      success : true,
      endPoint : '/api/movies/create', 
    }
    try {
      const data = await db.Movie.create({
        ...req.body
      })
      response.info = data
      return res.json(response) 
    } catch (error) {
      console.log(error);
      response.success = false
      response.msg = 'Hubo un error'
      return res.json(response)
    }
  },
  detail: async(req, res) => {
    const response = {
      success : true,
      endPoint : '/api/movies/detail', 
    }
    try {
      const data = await db.Movie.findByPk(
        req.params.id)
      response.info = data
      return res.json(response) 
    } catch (error) {
      response.success = false
      response.msg = 'Hubo un error'
      return res.json(response)
    }
  }


}