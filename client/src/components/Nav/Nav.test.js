import React from 'react';
import {Link} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Nav from './Nav';

Enzyme.configure({adapter: new Adapter()});

describe('<Nav />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Nav />);
	});

	it('Deberia renderizar tres componentes Link', () => {
		expect(wrapper.find(Link)).toHaveLength(3);
	});
	it('El primer link, LOGO debe llevar a la ruta / y poseer el nombre Game Over', () => {
		expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
		expect(wrapper.find(Link).at(0).text()).toEqual('Game Over');
	});
	it('El segundo link deberia llevar a la ruta /home con texto Inicio', () => {
		expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');

		expect(wrapper.find(Link).at(1).text()).toEqual('Inicio');
	});
	it('El tercer Link debe routear a /create con el nombre Crear Juego!', () => {
		expect(wrapper.find(Link).at(2).prop('to')).toEqual('/create');

		expect(wrapper.find(Link).at(2).text()).toEqual('Crear Juego!');
	});
});
