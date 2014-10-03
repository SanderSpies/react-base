var React = require('react');
var SimpleScroller = require('../../lib/touch/SimpleScroller');

require('./viewerRebound.css');

var ViewerRebound = React.createClass({
  render() {
    var content = [];

    for (var i = 0; i < 100; i++) {
      content.push(<li key={i}>Item {i}</li>);
    }

    return (
      <SimpleScroller className="ScrollPage" options={{scrollingX: false}}>
        <ul className="ScrollPage-content">{content}</ul>
      </SimpleScroller>
    );
  }
});

module.exports = ViewerRebound;