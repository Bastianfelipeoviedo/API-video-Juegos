import {PAGINATES} from './constants';
export const getViews = (array, min, max) => {
	if (!min && !max) {
		return array.slice(0, PAGINATES);
	}
	return array.slice(min, max);
};

export const getGenres = (type, array) => {
	if (type === 'All') return array;
	let matchGenre= array.filter(el => {
		for(let i = 0 ; i < el.genres.length ; i++){
			if(el.genres[i].name === type){
				return true;
			}
		}
	});
	return matchGenre;
};

export const getOrderType = (order, array) => {
	switch (order) {
		case 'API':
			return array.filter((el) => typeof el.id === 'number');

		case 'DB':
			return array.filter((el) => el.id.toString().length > 35);

		case 'All':
			return array;

		default:
			return array;
	}
};

export const getGamesOrder = (order, array) =>{
	switch(order){
		case 'A-Z':
			return array.sort((a,b)=>{
				if(a.name > b.name){
					return 1;
				}else{
					return -1;
				}
			});
		
		case 'Z-A':
			return array.sort((a, b) => {
				if (a.name < b.name) {
					return 1;
				} else {
					return -1;
				}
			});

		case 'Mayor Rating':
			return array.sort((a, b) => {
				if (a.rating < b.rating) {
					return 1;
				} else {
					return -1;
				}
			});

		case 'Menor Rating':
			return array.sort((a, b) => {
				if (a.rating > b.rating) {
					return 1;
				} else {
					return -1;
				}
			});

		default:
			return array;
	}
}

export const Validate = (inputs) => {
	let errors = {};
	if (inputs.name === '') {
		errors.name = 'Nombre es requerido';
	}

	if (inputs.description === '') {
		errors.description = 'Descripcion es requerida';
	}
	
	if (inputs.genres[0] === undefined) {
		errors.genres = 'Generos son requeridos';
	}
	// if (inputs.platforms.length === 0) {
	// 	errors.platforms = 'Elije al menos una plataforma';
	// }
	return errors;
};
