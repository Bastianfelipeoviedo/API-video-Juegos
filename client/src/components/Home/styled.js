import styled from 'styled-components';


export const StyledDiv = styled.div`
    margin-bottom: 15px;
    .back{
        color:white;
        cursor:pointer;
        font-weight: bold;
        font-family:'Press Start 2P';
        margin-top: 30px;
        margin-left: 20px;
        width:120px;
        padding:5px;
        &:hover{
            background-color:white;
            color:black;
        }
    }
    .container--cards{
        display:grid;
        width: 75%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        margin: auto;
        justify-content:center;
        text-align:center;
        color:white;
        -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        background:black;
        padding-bottom: 15px;
        .link{
            text-decoration:none;
            color:inherit;
            width:300px;
            height:275px;
            margin-bottom: 10px;
            .cards{
                border: 1px solid white;
                display:block;
                margin-top:10px;
                margin-left: 10px;
                font-size:10px;
                border-radius:2px;
                width: 300px;
                height: 275px;
                text-align:center;
                font-family: 'Press Start 2P', cursive;
                :hover{
                    transform: scale(1.03,1.05);
                    transition-duration: 1s;
                    background-color:black;
                }
                img{
                    width: 200px;
                    height: 150px;
                    margin-top:10px;
                }
                .genres{
                    width: 100%;
                    height: 100%;
                    display:grid;
                    grid-template-columns: 1fr 1fr;
                    color:white;
                    font-size:8px;
                }
            }
        }
    }

    @-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
`