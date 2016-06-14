var React = require('react');
var DefaultLayout = require('./layouts/default');

var Success = React.createClass({
  render: function() {
    return (<DefaultLayout title={this.props.title}>
              <div data-role="header">
                  <h1>{this.props.title}</h1>
              </div>
              <div data-role="content" data-theme="c">
                <div style={{width: '50%', margin: '0 auto'}}>

                  <h3>Thank you </h3>
                </div>
              </div>
              <div data-role="footer">
                <h4>ciao</h4>
              </div>
            </DefaultLayout>);
  }
});

module.exports = Success;
