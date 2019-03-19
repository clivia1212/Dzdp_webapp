import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';
import { getSearchData } from '../../../fetch/search/search';

const initialState = {
  // 存储列表信息
  data: [],
  // 记录当前状态下，还有没有更多数据可供下载
  hasMore: false,
  // 记录当前状态下，是“加载中.."还是“点击加载更多”
  isLoadingMore: false,
  // 下一页页码
  page: 0,
};

class SearchList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = initialState;
  }

  render() {
    return (
      <div>
        {/* 列表 */}
        {
          this.state.data.length
          ? <ListComponent data={this.state.data} />
          : <div>{/* 加载中... */}</div>
        }
        
        {/* loadmore */}
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
          : ''
        }
      </div>
    )
  }
  componentDidMount() {
    // 获取首页数据
    this.loadFirstPageData();
  }
  componentDidUpdate(prevProps, prevState) {
    const keyword = this.props.keyword;
    const category = this.props.category;

    // 搜索条件完全相等时，忽略
    if (
      keyword === prevProps.keyword
      && category === prevProps.category
    ) {
      return;
    }

    // 重置state
    this.setState(initialState);

    // 重新加载数据
    this.loadFirstPageData();
  }
  // 获取首屏数据
  loadFirstPageData() {
    const cityName = this.props.userinfo.cityName;
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(0, cityName, category, keyword);
    this.resultHandle(result);
  }
  // 加载更多数据
  loadMoreData() {
    // 记录状态
    this.setState({
      isLoadingMore: true
    });
    const cityName = this.props.userinfo.cityName;
    const page = this.state.page; // 下一页页码
    const keyword = this.props.keyword || '';
    const category = this.props.category;
    const result = getSearchData(page, cityName, category, keyword);    
    this.resultHandle(result);

    // 增加page的计数
    this.setState({
      // page: page + 1,
      isLoadingMore: false,
    });
  }
  // 数据处理
  resultHandle(result) {
    // 增加page计数
    const page = this.state.page;
    this.setState({
      page: page + 1,
    });
  
    result.then(res => {
      return res.json();
    }).then(json => {
      const hasMore = json.hasMore;
      const data = json.data;

      // 存储
      this.setState({
        hasMore,
        data: this.state.data.concat(data)
      });
    }).catch(ex => {
      if (__DEV__) {
        console.error('搜索页获取数据报错，', ex.message);
      }
    })
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchList);
