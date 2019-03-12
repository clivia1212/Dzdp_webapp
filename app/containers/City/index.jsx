import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import LocalStore from '../../util/localStore';
import { CITYNAME } from '../../config/localStoreKey';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

class City extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Header title="选择城市" />
        <CurrentCity cityName={this.props.userinfo.cityName} />
        <CityList changeFn={this.changeCity.bind(this)} />
      </div>
    )
  }
  changeCity(cityName) {
    //将新选择的城市设置为当前城市
    // 1. 修改redux
    // 2. 修改localStorage
    // 3. 跳转到首页
    this.props.userInfoActions.updateCityName({
      cityName,
    });

    LocalStore.setItem(CITYNAME, cityName);

    hashHistory.push('/');
  }
}


function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(City);
