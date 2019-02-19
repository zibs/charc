import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';
import pdf1 from './pdfs/Charcuterie Issue 1-Online.pdf';
import pdf2 from './pdfs/Charcuterie Issue 2-Online.pdf';
import pdf3 from './pdfs/Charcuterie Issue 3-Online.pdf';
import pdf4 from './pdfs/Charcuterie Issue 4-Online.pdf';
import pdf5 from './pdfs/Charcuterie Issue 5-Online.pdf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Wrap">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <a className="App-link one" href={pdf1} target="_blank" without rel="noopener noreferrer">
            Charcuterie 1: You should eat something before coming over
          </a>
          <a className="App-link two" href={pdf2} target="_blank" without rel="noopener noreferrer">
            Charcuterie 2: future decapitations under posh hats
          </a>
          <a
            className="App-link three"
            href={pdf3}
            target="_blank"
            without
            rel="noopener noreferrer">
            Charcuterie 3: Need not pander
          </a>
          <a
            className="App-link four"
            href={pdf4}
            target="_blank"
            without
            rel="noopener noreferrer">
            Charcuterie 4: very tactile present
          </a>
          <a
            className="App-link five"
            href={pdf5}
            target="_blank"
            without
            rel="noopener noreferrer">
            Charcuterie 5: the other plants are also having a hard time
          </a>
        </header>
      </div>
    );
  }
}

export default App;
