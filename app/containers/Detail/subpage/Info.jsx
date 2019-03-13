import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getInfoData } from '../../../fetch/detail/detail';


class Info extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      info: false
    }
  }

  render() {
    return (
      <div>
        {
          this.state.info
          ? <div>有数据了</div>
          : <div>ds</div>
        }
      </div>
    )
  }
  componentDidMount() {
    var id = this.props.id;
    var result = getInfoData(id);
    result.then(res => {
      res.json();
    }).then(json => {
      this.setState({
        info: json
      });
    });
  }
}

export default Info;
