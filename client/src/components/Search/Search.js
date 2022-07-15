import {StyleDiv}  from './styled';
import {useState} from 'react';
import {getSearch} from '../../actions/actions';
import {useDispatch} from 'react-redux';

const Search = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');


    const handleChange= (e)=>{
        setName(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name.length){
            dispatch(getSearch(name));
        }
    }

    return (
        <StyleDiv>
            <div className='container'>
                <form className='form' onSubmit={e => handleSubmit(e)}>
					<input
						className='input'
						type='text'
						autoComplete='off'
                        placeholder='Buscar'
                        onChange={(e) => handleChange(e)}
					/>
                </form>
			</div>
        </StyleDiv>
    );
}

export default Search;