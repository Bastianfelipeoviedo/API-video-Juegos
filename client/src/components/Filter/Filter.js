import {useDispatch,useSelector} from 'react-redux'
import { useEffect} from 'react';
import {getGenres} from '../../actions/actions';
import {setGamesGenres, setGamesOrder, setGamesTypes} from '../../actions/actions';
import {StyledDiv} from './styled'


const Filter = () => {
    const dispatch=useDispatch();
    const genres = useSelector(state => state.gamesGenres);

    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])

    const handleGenres = (e) =>{
        dispatch(setGamesGenres(e.target.value));
    };

    const handleOrder = (e) => {
		dispatch(setGamesOrder(e.target.value));
	};

    const handleType = (e) => {
		dispatch(setGamesTypes(e.target.value));
	};


    return (
        <>
            <StyledDiv>
                <div className='genres'>
                    <label for='generos'>Mostrar por Genero</label>
                    <select name='generos' id='generos' onChange={(e)=> handleGenres(e)}>
                            <option value='All'>-Opciones-</option>
                        {
                            genres && genres.map((el,i)=>(
                                <option key={i} value={el.name}>{el.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='RandomOrder'>
                    <label for='Order'>Mostrar por Orden</label>
                    <select name='Order' id='Order' onChange={(e) => handleOrder(e)}>
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>
                        <option value='Mayor Rating'>Mayor Rating</option>
                        <option value='Menor Rating'>Menor Rating</option>
                    </select>
                </div>
                <div className='OrderType'>
                    <label for='OrderType'>Mostrar por Orden</label>
                    <select name='OrderT' id='OrderT' onChange={(e) => handleType(e)}>
                        <option value='API'>API</option>
                        <option value='DB'>Creados</option>
                    </select>
                </div>
            </StyledDiv>
        </>
    );
}
 
export default Filter;