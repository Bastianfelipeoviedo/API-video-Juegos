const {Videogame, Genre} = require('../db');

const getDb= async () => {
    return await Videogame.findAll({ // X cantidad de juegos guardados en mi DB
        include:{
            model: Genre,
            attributes: ['id','name'],
            through:{
                attributes:[],
            }
        }
    })
}

module.exports=getDb;