import React, { Component } from 'react';
import './App.css';

import Dialog from 'react-dialog';

class App extends Component {
  state = {
    isShow: false,
    title: '测试标题',
    text: '这是一次新的月度分享------发布组件到npm',
    YesTitle: '确定',
    NoTitle: '取消'
  }
  yesFn = () => {
    this.setState({
      isShow: false
    })
  }
  noFn = () => {
    this.setState({
      isShow: false
    })
  }
  openDialog = () => {
    this.setState({
      isShow: true
    })
  }
  render() {
    const { isShow, title, text, YesTitle, NoTitle} = this.state
    return (
      <div className="App">
        <button style={{
          width: '120px', 
          height: '60px', 
          background: 'yellowgreen', 
          color: '#fff', 
          fontSize: '20px', 
          borderRadius: '8px', 
          marginTop: '100px',
          outline: 'none',
          border: '1px solid transparent',
          cursor: 'pointer'
        }} 
        onClick={this.openDialog}>click</button>
        <Dialog 
        className='dialogStyle'
        isShow={isShow}
        title={title}
        text={text}
        YesTitle={YesTitle}
        NoTitle={NoTitle}
        yesBtn={this.yesFn}
        noBtn={this.noFn}
        />
      </div>
    );
  }
}

export default App;
