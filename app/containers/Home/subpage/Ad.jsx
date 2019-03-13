import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeAd from '../../../components/HomeAd';
import { getAdData } from '../../../fetch/home/home';

class Ad extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: [],
    }
  }

  render() {
    return (
      <div>
        {
          this.state.data.length
          ? <HomeAd data={this.state.data} />
          : <div>加载中...</div>
        }
      </div>
    )
  }

  componentDidMount() {
    const result = getAdData();
    result.then(res => {
      return res.json();
    }).then((json) => {
      const data = json;
      if (data.length) {
        this.setState({ data });
      }
    }).catch(ex => {
      if (__DEV__) {
        console.error('Home ads module get error', ex.message);
      }
    });
  }
}

export default Ad;
