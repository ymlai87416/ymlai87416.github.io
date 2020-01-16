import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ielts4000 from './Components/Ielts4000.js';
import Ielts7000 from './Components/Ielts7000.js';
import Toefl5000 from './Components/Toefl5000.js';

/*
  load 2 cache file, and then search the file every search

*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { tabName: "IELTS 4000", id: 1 },
        { tabName: "TOEFL 5000", id: 2 },
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
      var tabStyle = res.id == this.state.currentIndex ? 'nav-link active' : 'nav-link';

      return (
        <li  className="nav-item">
          <a className={tabStyle} href="#" key={index} onClick={this.tabChoiced.bind(_this, res.id)}>{res.tabName}</a> 
        </li>
      )

    }.bind(_this));

    return (
      <div className="App">
        <ul className="nav nav-tabs">
          {tabList}
        </ul>
        <div className="appList">
          <div style={{ "display": isBox1Show }} >
            <Ielts4000></Ielts4000>
          </div>
          <div style={{ "display": isBox2Show }}>
            <Toefl5000></Toefl5000>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
