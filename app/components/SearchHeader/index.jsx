import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';
import SearchInput from '../SearchInput';

import './index.less';

class SearchHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span
          className="back-icon float-left"
          onClick={this.clickHandler.bind(this)}
        >
          <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          &nbsp;
          <SearchInput value={this.props.keyword || ''} enterHandler={this.enterHandler.bind(this)} />
        </div>
      </div>
    );
  }
  clickHandler() {
    window.history.back();
  }
  enterHandler(value) {
    hashHistory.push('/search/all/' + encodeURIComponent(value));
  }
}

export default SearchHeader;
