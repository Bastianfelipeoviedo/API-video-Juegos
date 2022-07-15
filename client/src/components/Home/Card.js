import {NavLink} from 'react-router-dom';


const Card = ({id,name,genres,image}) => {
    return (
        <NavLink to={`/videogame/${id}`} className='link'>
            <div key={id} className='cards'>
                <div className='containers'>
                    <img src={image} alt={name}/>
                    <h2>{name}</h2>
                    <div className='genres'>
                        {
                            genres.map((genre,id)=>{
                                return <p key={id}>{genre.name}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </NavLink>
    );
}
 
export default Card;