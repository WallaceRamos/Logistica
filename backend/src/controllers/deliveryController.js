const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    
    const { page = 1 } = request.query;

    const [count] = await connection('delivery').count();

    const delivery = await connection('delivery')
    .join('users', 'users.id', '=', 'delivery.user_id')
    .limit(5)
    .offset((page -1) * 5)
    .select(['delivery.*', 'users.name']);
   
    response.header('X-Total-Count', count['count(*)']);

    return response.json(delivery);
  },

  async create(request, response) {
    const { endereco, produto, periodo, modelo, cor, quantidade, tempo  } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('delivery').insert({
      endereco,
      produto,
      periodo, 
      modelo, 
      cor, 
      quantidade, 
      tempo, 
      user_id
    });
    

    return response.json({ id });
  },


  async delete(request, response) {
    const { id } = request.params;

    // const solicitation = await connection('solicitations')
    //   .where('id', id)
    //   .select('user_id')
    //   .first();

    // if(solicitation.adm_id != adm_id){
    //   return response.status(401).json({ error: 'Operação não permitida.'});
    // }
    await connection('delivery').where('id', id).delete();

    return response.status(204).send();


  }


};