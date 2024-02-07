import React , {useEffect,useState} from 'react'
import Navbar from './Components/Navbar';
import NewsComp from './Components/NewsComp';
import Footer from './Components/Footer';
import NewsSlider from './Components/NewsSlider';
import './App.css';
import "./index.css"
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

// let apikey = "ce96a9a0c82f3c6b272ed8292ca07b0e";
const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  return (
    <>
      <LoadingBar
        height={3}
        color='#4655d8'
        progress={progress}
      />
      <Navbar />
      <NewsSlider />
      <Routes>
        <Route path='/' element={<NewsComp setProgress={setProgress} key="general" language="en" country="in" category="general" apikey={apikey} />} />
        <Route path='world' element={<NewsComp setProgress={setProgress} key="world" language="en" country="in" category="world" apikey={apikey} />} />
        <Route path='nation' element={<NewsComp setProgress={setProgress} key="nation" language="en" country="in" category="nation" apikey={apikey} />} />
        <Route path='business' element={<NewsComp setProgress={setProgress} key="business" language="en" country="in" category="business" apikey={apikey} />} />
        <Route path='technology' element={<NewsComp setProgress={setProgress} key="technology" language="en" country="in" category="technology" apikey={apikey} />} />
        <Route path='entertainment' element={<NewsComp setProgress={setProgress} key="entertainment" language="en" country="in" category="entertainment" apikey={apikey} />} />
        <Route path='sports' element={<NewsComp setProgress={setProgress} key="sports" language="en" country="in" category="sports" apikey={apikey} />} />
        <Route path='science' element={<NewsComp setProgress={setProgress} key="science" language="en" country="in" category="science" apikey={apikey} />} />
        <Route path='health' element={<NewsComp setProgress={setProgress} key="health" language="en" country="in" category="health" apikey={apikey} />} />
      </Routes>
      <Footer />

    </>
  )
}
export default App