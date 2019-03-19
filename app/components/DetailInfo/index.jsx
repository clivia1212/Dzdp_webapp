import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// import './index.less';

class DetailInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const data = this.props.data;
    return (
      <div>
        <img src={data.img} alt="" width="100" />
        <h1>{data.title}</h1>
        
      </div>
    )
  }
}

export default DetailInfo;
