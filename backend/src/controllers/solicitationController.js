const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    
    const { page = 1 } = request.query;

    const [count] = await connection('solicitations').count();

    const solicitations = await connection('solicitations')
    .join('users', 'users.id', '=', 'solicitations.user_id')
    .limit(5)
    .offset((page -1) * 5)
    .select(['solicitations.*', 'users.name']);
   
    response.header('X-Total-Count', count['count(*)']);

    return response.json(solicitations);
  },

  async create(request, response) {
    const { endereco, produto, quantidade, order_id  } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('solicitations').insert({
      endereco,
      produto,
      quantidade, 
      order_id,
      user_id
    });
    

    return response.json({ id });
  },

  async indexEspecific(request, response) {
    const user_id = request.headers.authorization;

    const { page = 1 } = request.query;

    const [count] = await connection('solicitations').where('user_id', user_id).count();

    const solicitations = await connection('solicitations')
      .where('user_id', user_id)
      .join('users', 'users.id', '=', 'solicitations.user_id')
      .limit(5)
      .offset((page -1) * 5)
      .select(['solicitations.*', 'users.name']);

      response.header('X-Total-Count', count['count(*)']);
    return response.json(solicitations);
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
    await connection('solicitations').where('id', id).delete();

    return response.status(204).send();


  }


};