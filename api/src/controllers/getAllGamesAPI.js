const axios = require('axios');
const {VIDEOGAMES_URL} = require('../utils/constants');
const {API_KEY} = process.env;

const getApi = async(req) =>{
    // llamado a las apis para obtener 100 juegos

    let callApi1 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page_size=40`);
    let callApi2 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page=4&page_size=40`);
    let callApi3 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page=9&page_size=20`);
    let games=[];


    //mapeo para que games contenga 40 juegos por default de la API
    callApi1.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            platforms: element.parent_platforms,
            genres: element.genres,
        })
    })

    callApi2.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            platforms: element.parent_platforms,
            genres: element.genres,
        })
    })

    callApi3.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            platforms: element.parent_platforms,
            genres: element.genres,
        })
    })
    // deberian ser 100 juegos en games.length;
    return games;
}

const getAllApi = getApi();

module.exports=getAllApi;
