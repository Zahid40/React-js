import './App.css';
import Txtform from './components/Txtform';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar title="SuperText" />
      <div className="container">
      <Txtform heading="Enter the Text to analyze" lable="Here >>>" />
      </div>
    </>
  );
}

export default App;
