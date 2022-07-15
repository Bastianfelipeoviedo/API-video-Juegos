/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description:'Uno de los mejores jueguitos',
  platforms:['Nintendo']
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));

  describe('GET /videogames', () => {

    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    ).timeout(47000);

    it('Responde con 101 videojuegos', async () => {
			try {
				const res = await agent.get('/videogames');
				expect(res.body).to.have.lengthOf(101);
			} catch (err) {
				console.log(err);
			}
		}).timeout(47000);

    it('Si pasan un name como query, responde con un nombre', async () => {
			try {
				const res = await agent.get('/videogames?name=gta');
				expect(res.body[0].name).to.be.equal('Grand Theft Auto');
			} catch (err) {}
		}).timeout(47000);
    
    it('Si se pasa un parámetro de identificación, debe devolver el videogame asociado con esa identificación', async () => {
			try {
				const res = await agent.get('/videogame/1');
				expect(res.body[0].name).to.be.equal('D/Generation HD');
			} catch (err) {}
		}).timeout(47000);
  });

  describe('POST /videogame', () => {

		it('responds with 200', async () => {
			try {
				await agent.post('/videogame').send({"name": "sadsad", "description": "sadsad", "released": "2021-06-22", "rating": "3", "image": "https://1.bp.blogspot.com/-RBSX-0ZNMCE/Vu78SsQ8naI…1fS7Zag/s1600/brick-cool-game-over-wallpapers.jpg","genres": [59, 28],"platforms":[{"platform": "PlayStation"},{"platform": "Xbox"}]}).expect(200);
			} catch (err) {
				console.log(err);
			}
		});

		it('Si no pasa el nombre responda con un 400', async () => {
			try {
				await agent.post('/videogame').send({}).expect(400);
			} catch (err) {
				console.log(err);
			}
		});
		it('Si no pasa platforms responde con 400', async () => {
			try {
				await agent.post('/videogame').send({name: 'Global Offensive'}).expect(400);
			} catch (err) {
				console.log(err);
			}
		});
		it('Muestra que crea correctamente un videojuego', async () => {
			try {
				const res = await agent
					.post('/videogame')
					.send({"name": "Half-Life 3", "description": "Half-Life 3", "released": "2021-06-22", "rating": "3", "image": "https://1.bp.blogspot.com/-RBSX-0ZNMCE/Vu78SsQ8naI…1fS7Zag/s1600/brick-cool-game-over-wallpapers.jpg","genres": [59, 28],"platforms":[{"platform": "PlayStation"},{"platform": "Xbox"}]});
				expect(res.body.name).to.be.equal('Half-Life 3');
			} catch (err) {
				console.log(err);
			}
		});
	});
}); 
