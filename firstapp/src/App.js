import { useState } from 'react';
// import AAbout from './components/About';
import Txtform from './components/Txtform';
import Navbar from './components/navbar';
import './App.css';


function App() {
  const [mode, setmode] = useState('light');
  const toogleMode = () => {
    if (mode === 'light') {
      setmode('dark')
    }
    else {
      setmode('light')
    }

    if (document.documentElement.getAttribute('data-bs-theme') === 'light') {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
  }




  return (
    <>
      <Navbar title="SuperText" mode={mode} toogleMode={toogleMode} />
      <div className=".container-fluid" style={{backgroundColor : mode==='light'?'#c0d6e4':'#05141a' , height : '100%'}}>
        <Txtform heading="Enter the Text to analyze............" mode={mode}/>
        {/* <AAbout /> */}
      </div>
    </>
  );
}

export default App;
