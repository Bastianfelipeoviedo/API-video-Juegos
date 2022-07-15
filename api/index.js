//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn,Videogame,Genre } = require('./src/db.js');
const axios = require('axios');
const {VIDEOGAMES_GENRES} = require('./src/utils/constants');
const {API_KEY} = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    // axios.get(`https://api.rawg.io/api/games/1?key=${API_KEY}`)
    // .then((element) =>
		// 	Videogame.create({
    //     name: element.data.name,
    //     released: element.data.released,
    //     description: element.data.description,
    //     image: element.data.background_image,
    //     rating: element.data.rating,
    //     platforms: element.data.parent_platforms,
		// 	})
		// 		.then((r) => r.setGenres(1))
		// 		.then(console.log('JUEGO CREADO'))
		// );
	  axios.get(`${VIDEOGAMES_GENRES}?key=${API_KEY}`).then((element) => {
      element.data.results.forEach((el) => Genre.create({id:el.id, name: el.name}));
      console.log('GENEROS AGREGADOS');
    })
  });
});
