import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ielts4000 from './Components/Ielts4000.js';
import Ielts7000 from './Components/Ielts7000.js';

/*
  load 2 cache file, and then search the file every search

*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tabName: "IELTS 4000", id: 1 },
        { tabName: "IELTS 7000", id: 2 },
      ],
      currentIndex: 1,
    };
  }

  tabChoiced=(id)=>{
    // tab切换的方法
    this.setState({
        currentIndex:id
    });
}

  render() {

    var _this = this;
    var isBox1Show = this.state.currentIndex == 1 ? 'block' : 'none';
    var isBox2Show = this.state.currentIndex == 2 ? 'block' : 'none';

    var tabList = this.state.tabs.map(function (res, index) {
      // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
      var tabStyle = res.id == this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

      return <li key={index} onClick={this.tabChoiced.bind(_this, res.id)} className={tabStyle}>{res.tabName}</li>

    }.bind(_this));

    return (
      <div className="App">
        <ul className="subNavWrap">
          {tabList}
        </ul>
        <div className="appList">
          <div style={{ "display": isBox1Show }} >
            <Ielts4000></Ielts4000>
          </div>
          <div style={{ "display": isBox2Show }}>
            <Ielts7000></Ielts7000>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
