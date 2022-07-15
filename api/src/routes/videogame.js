const { Router } = require('express');
const {Videogame} = require('../db');
const {gameDetail} = require('../controllers')
const router = Router();

router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    if(id){
        let game = await gameDetail('ID', id);
        game.length
            ? res.json(game[0])
            : res.status(404).json({error: 'Game not found'})
    }
});

router.post('/', async (req,res)=>{
    const{name, description, released, rating, genres,platforms,image} = req.body;
    if(!name || !description || !platforms ){
        return res.status(400).json({error: 'notNull Violation: It requires a valid name'});
    }else{
        const createGame= await Videogame.create({
            name: name, 
            description: description,
            released: released, 
            rating: rating, 
            platforms:platforms,
            image:image
        });
    
        await createGame.setGenres(genres);
        return res.json(createGame);
    }

})

module.exports=router;