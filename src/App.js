import React from 'react';

import Header from './component/header';
import Footer from './component/footer';
import Body from './component/body';

import './style/App.css';



function App() {
  return (
    <div className="App">
     <p>Rent Car</p>
     <Header />
     <Body />
     <Footer />
    </div>
  );
}

export default App;
