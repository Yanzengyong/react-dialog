## Install

```
npm i react-dialog-yzy
```
or

```
yarn react-dialog-yzy
```

## Usage

```
  import Dialog from 'react-dialog';

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

```

## Props

| name | type | default | description |
| ------ | ------ | ------ | ------ |
| className | String | null | need add '!important' |
| isShow | Boolean | false | control dialog display |
| title | String | '这是一个标题' | Title Name |
| text | String | '这是弹窗内容' |  Text Name |
| noBtn | Function | null | control dialog noBtn function (if not have prop noBtn will no 'noBtn' button)|
| yesBtn | Function | null | control dialog yesBtn function (if not have prop yesBtn will no 'yesBtn' button) |
| YesTitle | String | Yes | yesBtn name |
| NoTitle | String | No | noBtn name |

