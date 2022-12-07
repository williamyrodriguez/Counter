import './App.css';
import freecodecamplogo from './images/logo.png'
import Button from './components/button';
import Counter from './components/counter';
import {useState} from 'react';

function App() {
  const[clicksNumber, setClicksNumber]= useState(0);
  const handleClick = () => {
    setClicksNumber(clicksNumber+1);
  }
  const handleReset = () => {
    setClicksNumber(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src ={freecodecamplogo}
          alt='Logo de FreecodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Counter 
          clicksNumber={clicksNumber} />
        <Button
          text='Click'
          isClickButton={true}
          handleClick={handleClick} />

        <Button
          text='Reset'
          isClickButton={false}
          handleClick={handleReset} />
      </div>
      
    </div>
  );
}


export default App;
