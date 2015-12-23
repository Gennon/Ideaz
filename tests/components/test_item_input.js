// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var chai = require('chai');
var spies = require('chai-spies');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

chai.use(spies);

describe('Testing ItemInput controller', function() {
  jsdom({ skipWindowCheck: true });

  it('should have an <input> and <button> tag', function() {
    var ItemInput = require('../../app/js/components/item_input.jsx').default;

    var myDiv = TestUtils.renderIntoDocument(
      <ItemInput />
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'input');
      
    var button = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'button');

    expect(input).to.not.equal(null);
    expect(input).to.not.equal(undefined);
    expect(button).to.not.equal(null);
    expect(button).to.not.equal(undefined);
  });
  
  it('<input> should have correct default values', function() {
    var ItemInput = require('../../app/js/components/item_input.jsx').default;

    var myDiv = TestUtils.renderIntoDocument(
      <ItemInput />
    );

    var input = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'input');

    expect(input.getAttribute('value')).to.equal('');
    expect(input.getAttribute('placeholder')).to.equal("Write something crazy");
  });
  
  it('<button> should have correct default values', function() {
    var ItemInput = require('../../app/js/components/item_input.jsx').default;

    var myDiv = TestUtils.renderIntoDocument(
      <ItemInput />
    );

    var button = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'button');

    expect(button.getAttribute('value')).to.equal("Add");
  });
  
  it('<button> should fire onSubmitClick(text) when clicked', function() {
    var ItemInput = require('../../app/js/components/item_input.jsx').default;
    
    function test(text){};
    var spy = chai.spy(test);

    var myDiv = TestUtils.renderIntoDocument(
      <ItemInput onSubmitClick={text => spy(text)}/>
    );
    
    var input = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'input');
      
    expect(input.getAttribute('value')).to.equal("");
      
    input.setAttribute("value", "Some Text");
    TestUtils.Simulate.change(input);
    
    expect(input.getAttribute('value')).to.equal("Some Text");

    var button = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'button');
    
    expect(spy).to.not.have.been.called();  
    
    TestUtils.Simulate.click(button);
    
    expect(spy).to.have.been.called.with("Some Text");
  });
});