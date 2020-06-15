const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('requests').count();

    const pedido = await connection('requests')
    .limit(5)
    .offset((page -1) * 5)
    .select('*');

    res.header('X-Total-Count', count['count(*)']);

    return res.json(pedido);
  },

  async create(request, response) {
    const { endereco, produto, periodo  } = request.body;


    const [id] = await connection('requests').insert({
      endereco,
      produto,
      periodo, 
      
    });
    

    return response.json({ success:'solicitação enviada com sucesso', id });
  },

  async delete(request, response) {
    const { id } = request.params;
   
    await connection('requests').where('id', id).delete();

    return response.status(204).send();


  }


};