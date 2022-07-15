import { getViews, getGenres, getGamesOrder, getOrderType } from '../utils/methods';

const initialState = {
	games: [],
	gameDetail: [],
    gamesGenres: [],
	gameSearch:[],
    gamesViews:{
        all:[],
        now:[]
    },
    gamesFilter:'All',
    gamesList:'All'
}

const gamesReducer = (state=initialState, {type,payload}) => {
    switch(type){
        case 'GET_GAMES':
            return{
                ...state,
                games: payload,
                gamesViews:{
                    all: payload,
                    now: getViews(payload)
                },
                gamesFilter:'All'
            };
        
        case 'GAME_DETAIL':
            return{
                ...state,
                gameDetail:payload
            }
        
        case 'GENRES_GAMES':
            return{
                ...state,
                gamesGenres:payload
            }

        case 'GAME_SEARCH':
            return{
                ...state,
                gamesViews:{
                    ...state.gamesViews,
                    all: payload,
                    now: payload
                },
                gamesFilter:'Search'
            }
        
        case 'SET_GENRE':
            state.gamesViews.all = getGenres(
                payload, 
                getOrderType(state.gamesList, state.games)
            );
            return {
                ...state,
                gamesViews:{
                    ...state.gamesViews,
                    now: getViews(state.gamesViews.all)
                },
                gamesFilter: payload
            }

        case 'GAMES_ORDER':
            return {
				...state,
				gamesViews: {
					...state.gamesViews,
					now: getViews(
						getGamesOrder(payload, state.gamesViews.all)
					),
				},
				gamesFilter: payload,
			};

        case 'GAMES_TYPE':
            return {
				...state,
				gamesViews: {
					...state.gamesViews,
					all: getOrderType(payload, state.games),
					now: getViews(getOrderType(payload, state.games)),
				},
				gamesList: payload, /// API
				gamesFilter: payload,
			};

        case 'GET_VIEWSXPAGE':
        return {
            ...state,
            gamesViews: {
                ...state.gamesViews,
                now: getViews(
                    state.gamesViews.all,
                    payload.min,
                    payload.max
                ),
            },
        };

        

        default:
            return state;
    }
}

export default gamesReducer;