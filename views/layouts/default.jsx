var React = require('react');

var MainLayout = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width"/>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css"/>
          <script src="https://code.jquery.com/jquery-1.8.2.min.js"></script>
          <script src="https://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
          <link rel="stylesheet" href="/css/style.css"/>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = MainLayout;
