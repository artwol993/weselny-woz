import React from 'react';

import Header from './component/header';
import Footer from './component/footer';
import Body from './component/body';

import './style/App.scss';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
     <Header />
     <Body />
     <Footer />
    </div>
  );
}

export default App;
