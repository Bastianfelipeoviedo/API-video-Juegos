import styled from 'styled-components';
import image from '../../images/landing.jpg';

export const StyledDiv = styled.div`
    position:fixed;
    width: 100%;
    height: 100%;
    margin:0;
    background-image: url(${image});
    background-position: center center;
    background-size:cover;
    background-attachment: fixed;
    display:grid;
    .typing{
        height:20vh;
        }
        .intro{
            display:flex;
            text-align:center;
            justify-content: center;
            margin-top:30px;
            font-size:30px;
            h1{
                font-family:'Press Start 2P', cursive;
                color:red;
                overflow: hidden; 
                opacity:.7px;
                border-right: .15em solid; 
                white-space: nowrap; 
                margin: 0;
                letter-spacing: .15em;
                animation: 
                typing 3.5s steps(30, end),
                blink-caret .75s step-end infinite;
                text-shadow: 4px 4px black;
            }
        }
    }
    .card{
        display:flex;
        align-items:center;
        width: 100%;
        margin-top:500px;
        overflow: hidden;
        flex-direction: column;
        .container{
            box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
            overflow: hidden;
            position: relative;
            width: 600px;
            .info{
                .gopage{
                    font-family: 'Press Start 2P', cursive;
                    width: 100%;
                    height: 100%;
                    font-size:50px;
                    margin:0;
                    padding:0;
                    text-decoration:none;
                    outline:none;
                    letter-spacing: .15em;
                    color:white;
                    text-shadow: 5px 5px #000000;
                    animation: 
                    blink 1s steps(4, start) infinite;
                }
            }
        }
    }
    @keyframes typing {
        from { width: 0 }
        to { width: 55% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #ff7d24; }
    }

    @keyframes blink {
        to {
            visibility: hidden;
        }
    }
`