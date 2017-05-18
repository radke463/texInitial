import React from 'react';
import Button from '../src/js/resources/Button.jsx';

describe('Button item', () => {
  const wrapper = shallow(<Button />);

  it('should be a list item', () => {
    expect(wrapper).to.have.length(1); 
  });
});