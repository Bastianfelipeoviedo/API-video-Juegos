import axios from 'axios';
import {GAMES_URL, GAMES_TOTAL, GAMES_NAME, GAMES_GENRES, GAMES_ID} from '../utils/constants';

//cargar juegos
export const getGames = () => async (dispatch)=>{
    try{
        const games = await axios.get(GAMES_URL);
        dispatch({type: 'GET_GAMES', payload: games.data})
    }catch(err){
        console.log(err);
    };
};

//Numero Total de juegos
export const getTotalNum = () => async(dispatch)=>{
    try{
        const games = await axios.get(GAMES_TOTAL)
        dispatch({type: 'GET_TOTAL', payload:games.data})
    }catch(err){
        console.log(err)
    };
}

//cargar por genero
export const getGenres = () => async (dispatch)=>{
    try{
        const genres = await axios.get(GAMES_GENRES);
        dispatch({type: 'GENRES_GAMES', payload: genres.data})
    }catch(err){
        console.log(err);
    };
};


//cargar detalles de un juego al hacerle click
export const getDetail = (id) => async (dispatch) =>{
    try{
        const game = await axios.get(GAMES_ID+id);
        dispatch({type: 'GAME_DETAIL', payload: game.data})
    }catch(err){
        console.log(err);
        dispatch({type: 'GAME_DETAIL', payload: []});
    };
};

//cargar juego o juegos
export const getSearch = (name) => async (dispatch) =>{
    try{
        const search = await axios.get(`${GAMES_NAME}name=${name}`);
        dispatch({type: 'GAME_SEARCH', payload: search.data})
    }catch(err){
        console.log(err);
        dispatch({type: 'GAME_SEARCH', payload:[]});
    };
};

export const setGamesViews = (page) => (dispatch) => {
	dispatch({
		type: 'GET_VIEWSXPAGE',
		payload: {
			page: page.page,
			max: page.max,
			min: page.min
		}
	});
};

//Ordena por Genero
export const setGamesGenres= (genre) => (dispatch) =>{
    dispatch({type: 'SET_GENRE', payload: genre})
};

//Ordena por abecedario, rating mayor y menor
export const setGamesOrder = (order) => (dispatch)=>{
    dispatch({type: 'GAMES_ORDER', payload: order})
};

//Ordena por API o DB
export const setGamesTypes = (type) => (dispatch) =>{
    dispatch({type: 'GAMES_TYPE' , payload: type})
};
