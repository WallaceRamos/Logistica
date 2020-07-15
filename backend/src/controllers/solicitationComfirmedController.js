const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    
    const { page = 1 } = request.query;

    const [count] = await connection('solicitationsConfirmed').count();

    const solicitationsConfirmed = await connection('solicitationsConfirmed')
    .join('users', 'users.id', '=', 'solicitationsConfirmed.user_id')
    .limit(5)
    .offset((page -1) * 5)
    .select(['solicitationsConfirmed.*', 'users.name']);
   
    response.header('X-Total-Count', count['count(*)']);

    return response.json(solicitationsConfirmed);
  },

  async indexEspecific(request, response) {
    const user_id = request.headers.authorization;

    const { page = 1 } = request.query;

    const [count] = await connection('solicitationsConfirmed').where('user_id', user_id).count();

    const solicitationsConfirmed = await connection('solicitationsConfirmed')
      .where('user_id', user_id)
      .join('users', 'users.id', '=', 'solicitationsConfirmed.user_id')
      .limit(5)
      .offset((page -1) * 5)
      .select(['solicitationsConfirmed.*', 'users.name']);

      response.header('X-Total-Count', count['count(*)']);
    return response.json(solicitationsConfirmed);
  },

  async create(request, response) {
    const { endereco, produto, quantidade  } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('solicitationsConfirmed').insert({
      endereco,
      produto,
      quantidade, 
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
    await connection('solicitationsConfirmed').where('id', id).delete();

    return response.status(204).send();


  }


};