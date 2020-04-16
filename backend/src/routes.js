const expresss = require('express');

const GastoController = require('./controllers/GastoController');

const routes = expresss.Router();

routes.get('/gastos', GastoController.index)
routes.post('/gastos', GastoController.create);
routes.delete('/gastos/:id', GastoController.delete);
routes.put('/gastos/:id', GastoController.update);

module.exports = routes;