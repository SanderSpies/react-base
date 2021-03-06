var React = require('react');
var ReactStyle = require('react-style');
var ReactGSS = require('../../../mixins/GSSMixin');

var Toolbar = React.createClass({
  displayName: 'UIToolbar',

  layout(id) {
    return ReactGSS(
     `${id}[top] == this[top] + 10;
      ${id}[left] == this[left];
      ${id}[width] == 100;
      ${id}[height] == heading[instrinsic-height];`
    );
  },

  styles: ReactStyle(
   `background-color: #fff;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    padding: 12px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;`
  ),

  render() {
    return (
      <div id={this.props.id || '_toolbar'} className='toolbar' styles={this.styles}>
        <span>{this.props.children}</span>
      </div>
    );
  }
});

module.exports = Toolbar;