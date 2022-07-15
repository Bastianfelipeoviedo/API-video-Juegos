import {useRef,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getDetail} from '../../actions/actions';
import {StyledDiv} from './styled';
import {Link} from 'react-router-dom';
import Card from './Card';

const VideoGame = ({match}) => {
    const dispatch= useDispatch();
    const game= useSelector(state=>state.gameDetail)
    const fixedMatch = useRef(match.params.id);

    useEffect(()=>{
        dispatch(getDetail(fixedMatch.current));
    },[dispatch])

    return (  
        <>
            <StyledDiv>
                <Link to='/home' className='btn'> {'< Back'}</Link>
                {
                    <Card key={game.id}
                        name={game.name}
                        description={game.description}
                        rating={game.rating}
                        platforms={game.platforms}
                        genres={game.genres}
                        image={game.image}
                    />
                }
            </StyledDiv>
        </>
    );
}
 
export default VideoGame;