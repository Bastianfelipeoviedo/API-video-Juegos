import { StyledDiv } from "./styled";
import { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getGames} from '../../actions/actions';
import Card from './Card';

const Home = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.gamesViews.now);
    const gamesFilter = useSelector(state => state.gamesFilter);

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    const handleClick = (e) => {
		dispatch(getGames(e.target.value));
	};
    
    return (  
        <StyledDiv>
        {
            gamesFilter === 'Search' ?
                <>
                    <div value={'All'} onClick={handleClick} className='back'>
					{'< BACK'}
				    </div>
                    <div className='container--cards'>
                        {
                            games && games.map((juego,i)=>{
                                return <Card key={i}
                                id={juego.id}
                                name={juego.name}
                                genres={juego.genres}
                                image={juego.image}
                                />
                            })
                        }
                    </div>
                </>
                :
                 <>
                    <div className='container--cards'>
                        {
                            games && games.map((juego,i)=>{
                                return <Card key={i}
                                id={juego.id}
                                name={juego.name}
                                genres={juego.genres}
                                image={juego.image}
                                />
                            })
                        }
                    </div>
                </>
        }
        </StyledDiv>
    );
}

export default Home;