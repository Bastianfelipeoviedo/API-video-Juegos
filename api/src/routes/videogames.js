const { Router } = require('express');
const {getVideoGames, gameDetail} = require('../controllers')
const router = Router();


router.get('/',async(req,res)=>{
    const {name} = req.query;
    let gamesTotal = await getVideoGames(); // juegos de API Y LA DB
    if(name){
        let game = await gameDetail('GAME', name);
        if(game.length>0){
            let result=[];
            if(game.length>15){
                game.map((oneGame,index)=>{
                    if(index<15) result.push(oneGame);
                })
                return res.status(200).json(result);
            }
            return res.status(200).json(game);
        }else{
            return res.status(404).send({error: 'Game not found'});
        }
    }
    return res.status(200).json(gamesTotal);
});

//ruta agregada para conocer el total de los juegos vigentes y de ahi calcular
// para lograr la paginacion de manera optima y no un hardcodeo
router.get('/total',async (req,res)=>{
    let gamesTotal = await getVideoGames();
    res.json(gamesTotal.length)
})

module.exports=router;

