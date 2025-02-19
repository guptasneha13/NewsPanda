import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
//import Newsitem from './components/Newsitem';
//import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route path="/general" element={<News pageSize={18} country="in" category="general" />}>
          </Route>
          <Route path="/business" element={<News pageSize={18} country="in" category="business" />}>
          </Route>
          <Route path="/entertainment" element={<News pageSize={18} country="in" category="entertainment" />}>
          </Route>
          <Route path="/health" element={<News pageSize={18} country="in" category="health" />}>
          </Route>
          <Route path="/science" element={<News pageSize={18} country="in" category="science" />}>
          </Route>
          <Route path="/sports" element={<News pageSize={18} country="in" category="sports" />}>
          </Route>
          <Route path="/technology" element={<News pageSize={18} country="in" category="technology" />}>
          </Route>
          
        </Routes>
        </Router>
      </div>
    )
  }
}


































































































































