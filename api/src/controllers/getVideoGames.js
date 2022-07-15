const getAllApi = require('./getAllGamesAPI');
const getDb = require('./getAllGamesDB');

const getVideoGames = async() =>{
    let gamesApi = await getAllApi; //gamesApi = [{}{}{}{}{}{}{}]
    let gamesDb = await getDb(); //x gamesDB=[{}{}{}{}{}{}]
    let allGames = [...gamesApi, ...gamesDb]; // juegos de la api : ID : 3000 // juegos de la DB = id 34029345-erer23rq4314-134134-1341324-
    return allGames;
}

module.exports = getVideoGames;