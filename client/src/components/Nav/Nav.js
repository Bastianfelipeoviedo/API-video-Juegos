import {StyledDiv} from './styled';
import {Link} from 'react-router-dom';
import Search from '../Search/Search'
import {getGames}  from '../../actions/actions';
import {useDispatch} from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch();
    const handleSubmit = () =>{
        dispatch(getGames());
    }
    

    return ( 
        <StyledDiv>
            <div className='container-logo'>
                <Link to='/' className='logo'>
                    <h2>Game Over</h2>
                </Link>
            </div>
            <div className='container-btn'>
                <div className='botonera'>
                    <Link to='/home' className='btn-inicio'>
                        <h2 onClick={() => handleSubmit()}>Inicio</h2>
                    </Link>
                    <Link to='/create' className='btn-createGame'>
                        <h2>Crear Juego!</h2>
                    </Link>
                </div>
                <div className='searchBar'>
                    <Search/>
                </div>
            </div>
        </StyledDiv>
    );
}

export default Nav;
