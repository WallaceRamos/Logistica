const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  async create(request, response) {
    const { matricula } = request.body;
   
    const user = await connection('users')
    .where('id', matricula)
    .select('name','funcao', 'id' )
    .first();
    
    if(!user) {
      return response.status(400).json({ error : 'Usuario não encontrado'});
    }
  
    return response.json(user);

  }
  
};