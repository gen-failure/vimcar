import React from 'react';
import {inject, observer} from 'mobx-react';

import './Toaster.scss';

@inject('toaster')
@observer
class Toaster extends React.Component {
  render() {
    return(
      <div className="toasterComponent">
        {this.props.toaster.toasts.map((toast, index) => {
          //Using index as item key should be safe
          return <div className="toast" key={index} data-level={toast.level}>{toast.message}</div>
        })}
      </div>
    );
  }
}

export default Toaster;
