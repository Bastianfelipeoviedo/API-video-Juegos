import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	.list--container{
		color:white;
		font-family:'Press Start 2P';
		display:inline-block;
		.ul {
			font-family:'Press Start 2P';
			margin: 0px;
			padding: 0px;
			}
		.list {
			color: #dee2e6;
			font-size: 18px;
			list-style: none;
			text-align: center;
			margin: 15px 15px;
			&:hover {
				color: red;
				cursor:pointer;
				text-shadow: 1px 1px green;
				}
			}

		.listed {
			color: red;
			list-style: none;
			text-align: center;
			text-shadow: 1px 1px green;
			}
		}
	}

`;

