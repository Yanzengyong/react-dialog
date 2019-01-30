import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './dialog.css';

class Dialog extends Component {

  render() {
    const title = this.props.title || '这是一个标题';
    const text = this.props.text || '这是弹窗内容';
    const yesBtn = this.props.yesBtn;
    const noBtn = this.props.noBtn;
    const isShow = this.props.isShow;
    const YesTitle = this.props.YesTitle || 'Yes'
    const NoTitle = this.props.NoTitle || 'No'
    const className = this.props.className

    return (
      <div>
        {isShow ? (<div className='dialog_bg'>
          <div className={`dialog_container ${className}`}>
            <h1>{title}</h1>
            <p>{text}</p>
            <div className='dialog_btn_group'>
              {yesBtn ? (<button onClick={yesBtn}>{YesTitle}</button>) : null}
              {noBtn ? (<button onClick={noBtn}>{NoTitle}</button>) : null}
            </div>
          </div>
        </div>) : null}
      </div>
    );
  }
}

Dialog.propTypes = {
  isShow: PropTypes.bool,
  yesBtn: PropTypes.func,
  noBtn: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  YesTitle: PropTypes.string,
  NoTitle: PropTypes.string,
  className: PropTypes.string,
}

export default Dialog;
