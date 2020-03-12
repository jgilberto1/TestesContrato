const Joi = require('joi');
const request = require('supertest');
const joiAssert = require('joi-assert')

describe('GET /cadastro', () => {
it('deverá retornar uma lista de informações', done => {
    const cadList = Joi.array().items(Joi.object().keys({
        
            nome: Joi.string(),
            sobrenome: Joi.string(),
            cidade: Joi.string(),
            idade: Joi.number(),
            telefone: Joi.number()
            

    }));

    request('http://www.mocky.io')
    .get('/v2/5e6975872f00006bf8d8b45a')
    .expect(200)
    .expect('Content-type', 'application/json')
    .end((err, res) => {

        joiAssert(res.body, cadList);
        done(err);
    });
});
    });
    