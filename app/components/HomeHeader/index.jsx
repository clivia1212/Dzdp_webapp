import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';

import SearchInput from '../SearchInput';

import './index.less';

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"></i>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user"></i>
        </div>
        <div className="home-header-middle">
          <SearchInput value='' enterHanler={this.enterHanler.bind(this)} />
          {/* <div className="search-container">
            <i className="icon-search"></i>
            <input type="text" placeholder="请输入关键字"/>
          </div> */}
        </div>
      </div>
    )
  }
  enterHanler() {
    console.log(this);
  }
}

export default HomeHeader;
