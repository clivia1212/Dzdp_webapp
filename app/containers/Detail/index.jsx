import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';


class Detail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <Header title="商户详情" />
      </div>
    )
  }
}

export default Detail;
