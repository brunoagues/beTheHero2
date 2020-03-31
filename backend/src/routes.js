const express = require('express');

/*const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');*/

const routes  = express.Router();

routes.post('/ongs', (request, response)=>{
    const body = request.body;

    console.log(body);

    return response.json({
        evento:'semana',
        aluno: 'Bruno'
    });
});

/*routes.post('/sessions',SessionController.index);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);*/

module.exports = routes;