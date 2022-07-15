import {useState,useEffect} from 'react';
import StyledDiv from './styled';
import {useSelector, useDispatch} from 'react-redux';
import {getGenres} from '../../actions/actions';
import {IMAGEN,imgDefault, GAMES_ID} from '../../utils/constants';
import {Validate} from '../../utils/methods';
import axios from 'axios'


const CreateVg = () => {
    const dispatch = useDispatch();
    const gamesGenres = useSelector(state=> state.gamesGenres);
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState({error: false, create:false});
    const [typeGenre, setTypeGenre] = useState([]);
    const [typePlatform, setTypePlatform] = useState([]);
    const [inputs, setInputs] = useState({
        name:'',
        description:'',
        released:'',
        rating:'',
        image: imgDefault,
        genres:[],
        platforms:[],
    });
    const plataformas= [
        {
            platform:{
                id:1,
                name:'PC'
            }
        },
        {
            platform:{
                id:2,
                name:'Apple MacIntosh'
            }
        },
        {
            platform:{
                id:3,
                name:'Xbox'
            }
        },
        {
            platform:{
                id:4,
                name:'Nintendo'
            }
        },
        {
            platform:{
                id:5,
                name:'PlayStation'
            }
        },
        {
            platform:{
                id:6,
                name:'Linux'
            }
        }
    ];

    useEffect(()=>{
        dispatch(getGenres());
    },[dispatch]);

    useEffect(()=>{
        if(typeGenre.length){
            let total = gamesGenres.reduce((acc,el)=>{
                if(typeGenre.includes(el.name) === true){
                    acc.push(el.id)
                }
                return acc;
            },[]);
            setInputs({...inputs, genres:total});
        }
    },[typeGenre]);

    useEffect(()=>{
        setErrors(Validate(inputs))
    },[inputs])
    
    console.log(errors);
    useEffect(() => {
		if (!Object.keys(errors).length) {
			setAlert({...alert, errors: false});
		}
	}, [errors]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(Object.keys(errors).length){
            setAlert({...alert, error:true});
        }
        else{
            try{
                await axios.post(GAMES_ID, inputs);
                setAlert({...alert, create:true});
            }catch(err){
                console.log(err);
            }
        }
    };
    
    const handleImage=(e)=>{
        setInputs({...inputs, image: e.target.value})
    };
    
    const handlePlatform=(e)=>{
        setInputs({...inputs, platforms: [...inputs.platforms,{platform: {name: e.target.value}}]});
        handleShowPlatform(e);
    };

    const handleChange= (e)=>{
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const handleGenres=(e)=>{
        if(inputs.genres.length<4){
            if(!typeGenre.includes(e.target.value)){
                setTypeGenre([...typeGenre, e.target.value]);
            }
        } else setTypeGenre([e.target.value])
    };

    const handleShowPlatform=(e)=>{
        if(inputs.platforms.length<4){
            if(!typePlatform.includes(e.target.value)){
                setTypePlatform([...typePlatform, e.target.value]);
            }
        } else setTypePlatform([e.target.value])
    };


    return (
        <StyledDiv>
                <div>
                    <h1>Crea tu VideoJuego</h1>
                </div>
            <form onSubmit={(e) => handleSubmit(e)} className='container'>
                <div>
                    {
                        alert.error ? (
                            <div className='errors'>
                                <ul>
                                    {
                                        Object.values(errors).map(el=>(
                                            <li key={el} className='errors--text'>
                                                {el}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ) : null
                    }
                    <div className='container--image'>
                        <img src={inputs.image} alt='imagenloca'/>
                        <select onChange={e=>handleImage(e)}>
                            {IMAGEN &&
                                IMAGEN.map((el,i)=>(
                                    <option key={i} value={el.imagen}>
                                        Imagen {i+1}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='formulario'>
                    <div className='nombre'>
                        <label className='form--label_title'>Nombre</label>
                        <input
                            className='input'
                            name='name'
                            autoComplete='off'
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className='descripcion'>
                        <label className='form--label_description'>Descripcion</label>
                        <textarea
                            className='input'
                            name='description'
                            autoComplete='off'
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className='rating'>
                        <label className='form--label_description'>Rating</label>
                        <input
                            type='number'
                            className='input'
                            name='rating'
                            autoComplete='off'
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className='date'>
                        <label className='form--label_date'>Fecha de lanzamiento</label>
                        <input
                            type='date'
                            className='input'
                            name='released'
                            autoComplete='off'
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <div className='plataformas'>
                        <label className='form--label_title'>Plataforma</label>
                        <select onChange={e => handlePlatform(e)}>
                            {plataformas &&
                                plataformas.map((p,i)=>(
                                    <option key={i} value={p.platform.name}>{p.platform.name}</option>
                                ))
                            }
                        </select>
                        {typePlatform &&
                            typePlatform.map((p,i)=>(
                                <div key={i} className='generos-add'>
                                    <label className='generos-add'>{p}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className='genero'>
                        <label className='form--label_title'>Genero</label>
                        <select onChange={e => handleGenres(e)}>
                            {gamesGenres &&
                                gamesGenres.map((g,i)=>(
                                    <option key={i} value={g.name}>{g.name}</option>
                                ))
                            }
                        </select>
                        {typeGenre &&
                            typeGenre.map((el, i) => (
                                <div key={i} className='generos-add'>
                                    <label className='generos-add'>{el}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className='div_type_container'>
                    </div>
                    <div className='btn-container'>
                        <button className='btn-submit' type='submit'> Crear Juego </button>
                    </div>
                </div>
                {
                    alert.create ? (
                        <div className='create--confirm'>
                            <h3 className='message--create'>El juego fue creado!</h3>
                        </div>
                    ) : null
                }
            </form>
        </StyledDiv>
    );
}
 
export default CreateVg;