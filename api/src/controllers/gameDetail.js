const getDb = require('./getAllGamesDB');
const {VIDEOGAMES_URL} = require('../utils/constants');
const {API_KEY} = process.env;
const axios = require('axios');


const getGameDetail = async(situation,element)=>{
    let games = await getDb();

    switch(situation){
        case 'GAME':
            //en el caso que el usuario haya ingresado tal cual el nombre del juego ej: grand theft auto v
            let game= games.filter(e=> e.name.toLowerCase().replace(/ /g, "") === element.toLowerCase().replace(/ /g, ""));
            if(game.length>0){
                return game
            }else{
                //sino encontro el juego en la primera lista, se realiza una busqueda del nombre en base
                //al parametro ingresado y este retornara 15 juegos que se asemejen o sea el que busca
                let resultados=[];
                game = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&search=${element}`);
                if(game.data.results.length>0){
                    game.data.results.map((element,index)=>{
                        if(index<15){
                            resultados.push({
                                id: element.id,
                                name: element.name,
                                released: element.released,
                                description: element.description,
                                image: element.background_image,
                                rating: element.rating,
                                plataforms: element.parent_platforms,
                                genres: element.genres,
                            })
                        }
                    })
                    return resultados;
                }
            }
            return game
        case 'ID':
            //esto no me trae las description ya que el calleo de API por cantidad (40)
            //NO trae 40 por ende estas lineas quedan comentadas
            let onlyGame = games.filter(e=> e.id === element); 
            if(onlyGame.length){
                return onlyGame
            }else{
                try{
                    onlyGame = await axios.get(`${VIDEOGAMES_URL}/${element}?key=${API_KEY}`);
                    let resultado=[];
                    resultado.push({
                        id: onlyGame.data.id,
                        name: onlyGame.data.name,
                        released: onlyGame.data.released,
                        description: onlyGame.data.description,
                        image: onlyGame.data.background_image,
                        rating: onlyGame.data.rating,
                        platforms: onlyGame.data.parent_platforms,
                        genres: onlyGame.data.genres,
                    })
                    return resultado;
                }catch(error){
                    return resultado=error;
                }
            }
        default:
            return games;
    }
}

module.exports=getGameDetail;