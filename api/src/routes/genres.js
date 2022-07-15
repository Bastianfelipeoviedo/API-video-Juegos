const {Router} = require('express');
const {Genre} = require('../db');
const router = Router();

router.get('/', async (req, res) => {
	let geners = await Genre.findAll();
	return res.status(200).json(geners);
});

module.exports = router;