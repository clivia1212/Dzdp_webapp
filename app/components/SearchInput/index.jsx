import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class SearchInput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="search-container">
        <i className="icon-search"></i>
        <input type="text" placeholder="请输入关键字"/>
      </div>
    )
  }
}

export default SearchInput;
