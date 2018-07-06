import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

describe('Home test ', () => {
	it('expect to render Home component', () => {
		const mockStore = {
			robots: [],
			searchField: ''
		}
		expect(shallow(<Home store={mockStore} />)).toMatchSnapshot()
	})

})
