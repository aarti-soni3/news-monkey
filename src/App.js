import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize = 10;

  state = {
    progress: 0,
  }

  setProgress = (prog) => {
    this.setState({ progress: prog });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route path="/" element={<LoadingBar color='#f11946' progress={this.state.progress}/>} ></Route>
              <Route index element={<News setProgress={this.setProgress} key='general' pageSize={this.pageSize} country="in" category="general" />}></Route>
              <Route path="business" element={<News setProgress={this.setProgress} key='business' pageSize={this.pageSize} country="in" category="business" />}></Route>
              <Route path="entertainment" element={<News setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
              <Route path="health" element={<News setProgress={this.setProgress} key='health' pageSize={this.pageSize} country="in" category="health" />}></Route>
              <Route path="science" element={<News setProgress={this.setProgress} key='science' pageSize={this.pageSize} country="in" category="science" />}></Route>
              <Route path="sports" element={<News setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country="in" category="sports" />}></Route>
              <Route path="technology" element={<News setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country="in" category="technology" />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}