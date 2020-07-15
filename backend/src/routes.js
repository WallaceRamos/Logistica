const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');


const UserController = require('./controllers/userController'); 
const SolicitationController = require('./controllers/solicitationController');
const SolicitationConfirmedController = require('./controllers/solicitationComfirmedController');
const DeliveryController = require('./controllers/deliveryController');
const RequestController = require('./controllers/requestController');
const SessionController = require('./controllers/sessionController');



const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/users', UserController.index);
routes.get('/usersList', UserController.lista);
routes.post('/users', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required(),
    funcao: Joi.string().required(),
  })
}), UserController.create);


routes.get('/solicitations', SolicitationController.index);
routes.get('/mySolicitations', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), SolicitationController.indexEspecific);

routes.post('/solicitations', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    endereco: Joi.string().required(),
    produto: Joi.string().required(),
    quantidade: Joi.string().required(),
    order_id: Joi.number().required(),
  })
}), SolicitationController.create);
routes.delete('/solicitations/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), SolicitationController.delete);


routes.get('/solicitationsConfirmed', SolicitationConfirmedController.index);
routes.get('/mySolicitationsConfirmed', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), SolicitationConfirmedController.indexEspecific);

routes.post('/solicitationsConfirmed', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    endereco: Joi.string().required(),
    produto: Joi.string().required(),
    quantidade: Joi.string().required(),
  })
}), SolicitationConfirmedController.create);

routes.delete('/solicitationsConfirmed/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), SolicitationConfirmedController.delete);



routes.get('/delivery', DeliveryController.index);

routes.post('/delivery', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  [Segments.BODY]: Joi.object().keys({
    endereco: Joi.string().required(),
    produto: Joi.string().required(),
    quantidade: Joi.string().required(),
    modelo: Joi.string().required(),
    cor: Joi.string().required(),
    tempo: Joi.string().required(),
  })
}), DeliveryController.create);
routes.delete('/delivery/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), DeliveryController.delete);


routes.get('/requests', RequestController.index);
routes.post('/requests', celebrate({
  [Segments.BODY]: Joi.object().keys({
    endereco: Joi.string().required(),
    produto: Joi.string().required(),
    quantidade: Joi.string().required(),
  })
}), RequestController.create);
routes.delete('/requests/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), RequestController.delete);

module.exports = routes;