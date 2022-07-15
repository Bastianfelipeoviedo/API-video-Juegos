
const Card = ({name,description,image,genres,rating,platforms}) => {
    console.log(platforms);

    return (
        <div className='card'>
            <div className='title-img'>
                <img src={image} alt={name}/>
            </div>
            <div className='descript-rating'>
                <h1>{name}</h1>
                <dl>Descripcion: {description}</dl>
                <p>Rating: {rating}</p>
                <div className='plat-genres'>
                    <div className='genres'>
                        <p>Generos: </p>
                            {
                                genres && genres.map((el,i)=>{
                                    return <li key={i}>{el.name}</li>
                                })
                            }
                    </div>
                    <div className='plat'>
                        <p>Plataformas: </p>
                            {
                                platforms && platforms.map((el,i)=>{
                                    return <li key={i}>{el.platform.name}</li>
                                })
                            }
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Card;