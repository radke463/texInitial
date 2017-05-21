var React = require('react');
var Button = require('../src/js/resources/Button.jsx');

describe('Button item', function() {
  var wrapper = mount(
  	<Button />
  );

  it('should be a list item', function() {
    expect(wrapper.find(Button)).to.have.length(1); 
  });
});