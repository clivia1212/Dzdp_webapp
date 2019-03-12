import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Home from '../containers/Home';
import List from '../containers/List';
import Detail from '../containers/Detail';
import City from '../containers/City';
// import Search from '../containers/Search';
import NotFound from '../containers/404';


class RouteMap extends React.Component {
  updateHandler() {
    console.log('每次router变化之后会触发');
    // 统计PV
  }
  render() {
    return (
      <Router history={this.props.history} onUpdate={this.updateHandler.bind(this)}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="list" component={List} />
          <Route path="detail/:id" component={Detail} />
          <Route path="/city" component={City} />
          {/* <Route path="/search/:category(/:keyword)" component={Search} /> */}
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    )
  }
}

export default RouteMap;