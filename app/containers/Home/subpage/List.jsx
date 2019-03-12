import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getListData } from '../../../fetch/home/home';
import ListComponent from '../../../components/List';

import './style.less';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: [],
      hasMore: false,
    }
  }

  render() {
    return (
      <div>
        <h2 className="home-list-title">猜你喜欢</h2>
        {/* 列表 */}
        {
          this.state.data.length
          ? <ListComponent data={this.state.data} />
          : <div>加载中...</div>
        }
        
        {/* loadmore */}
      </div>
    )
  }
  componentDidMount() {
    // 获取首页数据
    this.loadFirstPageData();
  }
  // 获取首屏数据
  loadFirstPageData() {
    const cityName = this.props.cityName;
    const result = getListData(cityName, 0);
    this.resultHandle(result);
  }
  // 数据处理
  resultHandle(result) {
    result.then(res => {
      return res.json();
    }).then(json => {
      const hasMore = json.hasMore;
      const data = json.data;

      // 存储
      this.setState({
        hasMore,
        data,
      });
    })
  }
}


export default List;