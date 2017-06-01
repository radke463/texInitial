import React from 'react';
import Button from '../src/js/resources/Button.jsx';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

describe('Button item', function() {
	var wrapper = mount(
		<Button />
	);

	it('should be a list item', function() {
		expect(wrapper.find(Button)).to.have.length(1); 
	});
});