import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render CardList component', () => {
	const robots = [
		{
			id: 1,
			name: 'leanne',
			username: 'bret',
			email: 'asdf@gmail.com',
			phone: '1-770-736-8031 x56442',
			website: 'robo.com'
		}
	]
	expect(shallow(<CardList robots={robots} />)).toMatchSnapshot()
})