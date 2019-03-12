

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const data = this.props.todos;

    return (
      <ul style={{ marginTop: 10, fontSize: 20 }}>
        {
          data.map(_ => (
            <li key={_.id} onClick={this.clickHandler.bind(this, _.id)}>{_.text}</li>
          ))
        }
      </ul>
    )
  }

  clickHandler(id) {
    this.props.deleteFn(id)
  }
}

export default List;
