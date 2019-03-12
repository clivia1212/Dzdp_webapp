import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subpage/Ad.jsx';
import List from './subpage/List.jsx';


class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const { cityName } = this.props;
    return (
      <div>
          <HomeHeader cityName={cityName} />
          <Category />
          <Ad />
          <List cityName={cityName} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cityName: state.userinfo.cityName,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);