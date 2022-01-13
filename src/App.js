import './App.css';
import Color from './Colors/Color';
import Dropdown from './Colors/Dropdown';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("")
  return (
    <div className="App">
      <Dropdown setColor={setColor} color={color}/> 
      <Color color={color}/>
    </div>
  );
}

export default App;
