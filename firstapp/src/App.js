import { useState } from 'react';
import About from './components/About';
import Txtform from './components/Txtform';
import Navbar from './components/navbar';
import './App.css';
import Aleart from './components/Aleart';
import { Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setmode] = useState('light');

  const [aleart, setAleart] = useState(null);
  const showalt = (type, message) => {
    setAleart({ type, message })
    setTimeout(() => {
      setAleart(null)
    }, 1500);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setmode('dark')
    }
    else {
      setmode('light')
    }

    if (document.documentElement.getAttribute('data-bs-theme') === 'light') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      showalt("success", "Dark-Mode Enabled")
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', 'light')
      showalt("success", "Light-Mode Enabled")
    }
  }

  return (
    <>
      <Navbar title="SuperText" mode={mode} toogleMode={toogleMode} />
        <div className=".container-fluid" style={{ backgroundColor: mode === 'light' ? '#c0d6e4' : '#05141a', height: '100%' }}>
          <div className='container divalt'>
            <Aleart aleart={aleart} />
          </div>  
        </div>
      <Routes>
        
        <Route path="/" element={<Txtform showalt={showalt} heading="Enter the Text to analyze............" mode={mode} />} />
        <Route path="/about" element={<About />} />

        
        </Routes>
    </>
  );
}

export default App;
