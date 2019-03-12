import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';

import './index.less';

class Category extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      index: 0,
    };
  }

  render() {
    const opt = {
      auto: 2000,
      callback: function(index) {
        console.log(index);
        this.setState({ index });
      }.bind(this),
    };
  
    return (
      <div id="home-category">
        <ReactSwipe swipeOptions={opt}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="mountain">
                <img src="../../static/images/mountain.ong" alt=""/>
                景点</li>
              <li className="ktv">KTV</li>
              <li className="shop">购物</li>
              <li className="life">生活服务</li>
              <li className="exercise">健身运动</li>
              <li className="hair">美发</li>
              <li className="kid">亲子</li>
              <li className="eat">小吃快餐</li>
              <li className="eat2">自助餐</li>
              <li className="bar">酒吧</li>
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul >
            <li className={this.state.index === 0 ? 'selected' : 0}></li>
            <li className={this.state.index === 1 ? 'selected' : 0}></li>
            <li className={this.state.index === 2 ? 'selected' : 0}></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Category;
