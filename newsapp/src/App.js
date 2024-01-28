import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComp  from './Components/NewsComp';
import Footer from './Components/Footer';
import NewsSlider from './Components/NewsSlider';
import './App.css';
import "./index.css"
import { Route , Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


// let apikey = "ce96a9a0c82f3c6b272ed8292ca07b0e";



export default class App extends Component {
  apikey =  process.env.REACT_APP_NEWS_API;
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <>
        <LoadingBar
        height={3}
        color='#4655d8'
        progress={this.state.progress}
      />
        <Navbar />
        <NewsSlider/>
        <Routes>
          <Route path='/' element={<NewsComp setProgress={this.setProgress} key="general" language="en" country="in" category="general" apikey={this.apikey}/>} />
          <Route path='world' element={<NewsComp setProgress={this.setProgress} key="world" language="en" country="in" category="world" apikey={this.apikey}/>} />
          <Route path='nation' element={<NewsComp setProgress={this.setProgress} key="nation" language="en" country="in" category="nation" apikey={this.apikey}/>} />
          <Route path='business' element={<NewsComp setProgress={this.setProgress} key="business" language="en" country="in" category="business" apikey={this.apikey}/>} />
          <Route path='technology' element={<NewsComp setProgress={this.setProgress} key="technology" language="en" country="in" category="technology" apikey={this.apikey}/>} />
          <Route path='entertainment' element={<NewsComp setProgress={this.setProgress} key="entertainment" language="en" country="in" category="entertainment" apikey={this.apikey}/>} />
          <Route path='sports' element={<NewsComp setProgress={this.setProgress} key="sports" language="en" country="in" category="sports" apikey={this.apikey}/>} />
          <Route path='science' element={<NewsComp setProgress={this.setProgress} key="science" language="en" country="in" category="science" apikey={this.apikey}/>} />
          <Route path='health' element={<NewsComp setProgress={this.setProgress} key="health" language="en" country="in" category="health" apikey={this.apikey}/>} />
        </Routes>
        <Footer/>
        
      </>
    )
  }
}

