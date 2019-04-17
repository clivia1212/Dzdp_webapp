import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';
import './index.less';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div id="common-header">
        <span className="back-icon" onClick={this.clickHanle.bind(this)}>
          <i className="icon-chevron-left"></i>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
  clickHanle() {
    const backRouter = this.props.backRouter;
    if (backRouter) {
      hashHistory.push(backRouter);
    } else {
      window.history.back();
    }
  }
}

export default Header;
