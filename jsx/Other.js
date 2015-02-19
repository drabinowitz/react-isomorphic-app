var React = require('react');
var Link = require('react-router').Link;

var Other = React.createClass({
  render: function () {
    return (
      <div>
        <br />
        <Link to='home'>Head Home</Link>
      </div>
    );
  }
});

module.exports = Other;
