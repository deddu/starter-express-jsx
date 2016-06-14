var React = require('react');
var DefaultLayout = require('./layouts/default');
var FormField = require('./partials/formfields');

var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div data-role="page" style={{width: '95%', margin: '0 auto', position: 'relative'}}>
            <div data-role="header">
              <h1>{this.props.title }</h1>
            </div>
            <div data-role="content" data-theme="c">
              <div style={{textAlign: "center"}}>
                logo
              </div>

              <form id="checkin-data" name="checkin-data" action="" method="post">
                  {this.props.fields.map(FormField)}
              <input type="hidden" name="form" value={this.props.form} />
              <button> Submit </button>
              </form>
            </div>
            <div data-role="footer">
                <h4>ciao</h4>
            </div>
        </div>
      </DefaultLayout>);
  }
});

module.exports = HelloMessage;
