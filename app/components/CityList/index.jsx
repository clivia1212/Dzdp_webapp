import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import CITYS from '../../constants/citys';

import './index.less';

class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix">
          {
            CITYS.map(city => (
              <li key={city}>
                <span
                  onClick={this.clickHandle.bind(this, city)}
                >
                  {city}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
  clickHandle(city) {
    this.props.changeFn(city);
  }
};

export default CityList;
