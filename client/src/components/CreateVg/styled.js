import styled from 'styled-components';

export const StyledDiv = styled.div`
    color:black;
    h1{
        color:white;
        margin:20px auto;
        text-align:center;
        font-size:60px;
        font-family:'Press Start 2P';
    }
    .container{
        border-radius:5px;
        width: 90%;
        margin:10px auto;
        display:grid;
        grid-template-columns:1fr 1fr;
        background-color: #a90b03;
        .errors--text{
            color:white;
            font-size: 30px;
            z-index:99999999;
        }
        .errors{
            margin:auto;
            font-size:12px;
            font-family:'Press Start 2P';
        }
        .create--confirm{
            margin:auto;
            font-size:12px;
            font-family:'Press Start 2P';
        }
        .container--image{
            display:block;
            width:98%;
            height:450px;
            margin:0;
            img{
                display:block;
                width: 100%;
                height:415px;
            }
            select{
                width:100%;
                padding:5px;
                margin-top:5px;
                font-family:'Press Start 2P';
                outline:none;
            }
        }
        .formulario{
            display:grid;
            grid-template-columns:1fr 1fr;
            font-family:'Press Start 2P';
            margin:20px auto;
            font-size:15px;
            letter-spacing:2px;
            .rating{
                display:block;
                height:50px;
                }
            .nombre{
                display:block;
                height:50px;
                }
            .descripcion{
                display:block;
                height:50px;
                }
            .date{
                display:block;
                height:50px;
                }
            .plataformas{
                display:block;
                height:50px;
                }
            .genero{
                display:block;
                height:50px;
                }

            }
            label{
                display:block;
                margin-bottom:5px;
            }
            input{
                font-family:'Press Start 2P';
                width:80%;
                margin: 10px 0;
                height:30px;
                outline:none;
            }
            textarea{
                font-family:'Press Start 2P';
                width:80%;
                margin: 10px 0;
                height:30px;
                outline:none;
            }
            select{
                font-family:'Press Start 2P';
                width:80%;
                height:30px;
                outline:none;
                margin-bottom:10px;
            }
            .generos-add{
                font-size:14px;
            }
            .btn-container{
                margin: 50px auto 0px auto;
                .btn-submit{
                    border-radius:3px;
                    outline:none;
                    border:none;
                    background-color:white;
                    box-shadow:2px 2px black;
                    padding:10px 15px;
                    :hover{
                        background-color:red;
                        box-shadow:none;
                    }
                }
            }
        }
    }

`

export default StyledDiv;