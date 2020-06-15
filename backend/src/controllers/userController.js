const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

  async index(request, response) {
    const user = await connection('users').select('*');

    return response.json(user);
  },
  async lista(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('users').count().where('funcao', '01');

    const user = await connection('users')
    .limit(5)
    .offset((page -1) * 5)
    .select('*')
    .where('funcao', '01');

    res.header('X-Total-Count', count['count(*)']);

    return res.json(user);
  },
  async create(request, response) {
    const { name, email, whatsapp, funcao } = request.body;

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('users').insert({
      id,
      name,
      email, 
      whatsapp, 
      funcao
    })

    return response.json({ id, funcao });
  },


};