/** @jsx React.DOM */

define(['vendor/react','jquery'], function(React,$) {
  return React.createClass({
    render: function() {
      return (
        <div className="panel panel-primary">
          <div className="panel-heading">Title</div>
          <div className="panel-body">
            <b>Server Status</b>: {this.state.status}
          </div>
        </div>
      );
    },
    componentDidMount: function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: function(data) {
          this.setState(data);
        }.bind(this),
        error: function(xhr, status, err) {
          this.setState({"status":"Server Not Found"});
        }.bind(this)
      });
    },
    getInitialState: function() {
        return {status: "Unknown"};
    },
  });
});
