/** @jsx React.DOM */

require(['../vendor/react','HelloComponent'],
function(React, Hello) {
  React.renderComponent(
    <Hello />,
    document.getElementById('application')
  );
});
