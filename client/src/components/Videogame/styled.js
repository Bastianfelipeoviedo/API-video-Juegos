import styled from 'styled-components';


export const StyledDiv = styled.div`
    .btn{
        display:block;
        font-family:'Press Start 2P';
        color:white;
        text-decoration:none;
        width:120px;
        font-size:20px;
        padding:5px;
        margin:10px 0 20px 30px ;
        :hover{
            background:white;
            color:black;
        }
    }
    .card{
        background-color:#130B27;
        width:90%;
        margin:auto;
        display:grid;
        grid-template-columns: 1fr 1fr;
        text-align:center;
        color:white;
        font-family:'Press Start 2P';
        margin-bottom: 30px;
        .title-img{
            img{
                display:block;
                width:100%;
                height:100%;
            }   
        }
        .descript-rating{
            letter-spacing:3px;
            font-size: 15px;
            margin:auto 3px;
        dl{
            line-height:20px;
        }
        }
        .plat-genres{
            display:flex;
            justify-content:space-around;
            margin-bottom:20px;
            li{
                margin:10px;
            }
        }
    }
`
