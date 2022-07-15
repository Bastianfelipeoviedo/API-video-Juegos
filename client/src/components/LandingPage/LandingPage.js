import React from 'react'
import {StyledDiv} from './styled';
import {Link} from 'react-router-dom';

function LandingPage() {
    return (
        <StyledDiv>
            <div className='typing'>
                <div className='intro'>
                    <h1>BIENVENIDO A ⬇</h1>
                </div>
            </div>
            <div className='card'>
                <div className='container'>
                    <div className='info'>
                        <Link to='/home'>
                            <h3 className='gopage'>Click Aqui</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </StyledDiv>
    )
}

export default LandingPage;
