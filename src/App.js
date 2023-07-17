import React from 'react';
import './App.css';

// Bootstrap 5 import (via NPM)
import "bootstrap/dist/css/bootstrap.min.css";
// Date selection component
import SelectDate from './DateSelector';

function App() {
  return (
    <div className="App">
      <SelectDate />
    </div>
  );
}



export default App;
