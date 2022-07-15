import styled from 'styled-components';

export const StyleDiv = styled.div`
    display: flex;
    font-family: 'Press Start 2P';
	justify-content: center;
    margin: 10px auto;
	.container {
		.search-title {
			display: flex;
			justify-content: center;
            margin:0;
			.title {
				color: white;
				text-shadow: 3px 2px 4px black;
			}
		}
        .form{
            display:flex;
            text-decoration:none;
            margin-top:5px;
            .input {
                height:43px;
                margin-right: 20px;
                border: 5px;
                border-radius: 3px;
                outline: 0;
                font-family: 'Press Start 2P';
            }
        }
    }

`