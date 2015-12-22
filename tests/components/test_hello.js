// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('chai').assert;
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing Hello World', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: Hello World!', function() {
    var Hello = require('../../app/js/components/hello.jsx').default;

    var myDiv = TestUtils.renderIntoDocument(
      <Hello />
    );

    var headerText = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'h1');

    assert.equal(headerText.textContent, 'Hello World!');
  });
});