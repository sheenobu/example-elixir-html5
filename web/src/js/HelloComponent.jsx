/** @jsx React.DOM */

define(['../vendor/react'], function(React) {
  return React.createClass({
    render: function() {
      return (
        <div className="panel panel-primary">
          <div className="panel-heading">Title</div>
          <div className="panel-body">
            Body
          </div>
        </div>
      );
    }
  });
});
