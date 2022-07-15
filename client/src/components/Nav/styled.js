import styled from 'styled-components';


export const StyledDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border: 1px solid white;
    border-radius: 5px;
    background: #110d2b;
    margin: 5px 5px;
    opacity: 0.9;
    .container-logo{
        display:flex;
        margin: 3px 0;
        margin-left:30px;
        text-shadow: 2px 3px white;
        .logo{
            text-decoration:none;
            font-family: 'Press Start 2P', cursive;
            color:white;
            border-radius: 3px;
            color:red;
            letter-spacing: .17em;
            :hover{
                background-color: white;
                color:orange;
                text-shadow: 2px 3px gray;
                transition-duration: .6s;
            }
        }
    }

    .container-btn{
            display:flex;
            justify-content:space-between;
        .botonera{
            display:flex;
            margin: 3px 0;
            font-family: 'Press Start 2P', cursive;
            .btn-inicio{
                text-decoration:none;
                color:red;
                margin: 0 20px 0 40px;
                border-radius: 3px;
                h2{
                    letter-spacing: .17em;
                    text-shadow: 2px 3px white;
                    :hover{
                        text-shadow: 2px 3px gray;
                    }
                }
                :hover{
                    background-color: white;
                    color:orange;
                    text-shadow: 2px 3px gray;
                    transition-duration: .6s;
                }
            }
            .btn-createGame{
                text-decoration:none;
                color:red;
                margin: 0 20px 0 40px;
                border-radius: 3px;
                h2{
                    letter-spacing: .17em;
                    text-shadow: 2px 3px white;
                    :hover{
                        text-shadow: 2px 3px gray;
                    }
                }
                :hover{
                    background-color: white;
                    color:orange;
                    transition-duration: .6s;
                }
            }
            
        }
    }

`