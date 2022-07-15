const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
	before(() =>
		conn.authenticate().catch((err) => {
			console.error('Unable to connect to the database:', err);
		})
	);
	beforeEach(() => Videogame.sync({force: true}));

	describe('Validaciones', () => {
		describe('name, description, platform', () => {
			it('debería arrojar un error si el nombre es nulo', async () => {
				try {
					await Videogame.create({
            description:'hello moto',
            platforms:['NINTENGO']
          });
				} catch (err) {
					expect(err.message).to.equal(
						'notNull Violation: Es necesario el nombre',
					);
				}
			});
      it('debería arrojar un error si no se carga al menos una plataforma', async () => {
				try {
					await Videogame.create({
            name:'motorola',
            description:'hello moto'
          });
				} catch (err) {
					expect(err.message).to.equal(
						'notNull Violation: Es necesario cargar la plataforma',
					);
				}
			});
      it('debería arrojar un error si la descripcion es nula', async () => {
				try {
					await Videogame.create({
            name:'motorola',
            platforms:['NINTENGO']
          });
				} catch (err) {
					expect(err.message).to.equal(
						'notNull Violation: Es necesario cargar la descripcion',
					);
				}
			});
		});


		describe('released', () => {
			it('No se deberia crear un juego nuevo si el parametro ingresado es incorrecto', async () => {
				try {
					await Videogame.create({
						name: 'Metapod',
						description: [],
					});
				} catch (err) {}
				const videogame = await Videogame.findOne({
					where: {
						name: 'Metapod',
					},
				});
				expect(videogame).to.equal(null);
			});
		});


		describe('Crear un nuevo videojuego', () => {
			describe('Nuevo juego', () => {
				it('Se debe crear un juego de manera satisfactoria', async () => {
					await Videogame.create({name: 'Juego1', description: 'hola chau', platforms:['NINTENGO']});
					const game = await Videogame.findOne({
						where: {
							name: 'Juego1',
						},
					});
					expect(game.name).to.equal('Juego1');
					expect(game.description).to.equal('hola chau');
				});
			});
		});

	});
});

