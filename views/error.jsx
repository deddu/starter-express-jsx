var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
  render: function() {
    return (<DefaultLayout title={this.props.title}>
              <div>{this.props.title}</div>
              <h2>{this.props.message}</h2>
              <h2>{this.props.error.status}</h2>
              <code><pre>{this.props.error.stack}</pre></code>
            </DefaultLayout>);
  }
});

module.exports = HelloMessage;
