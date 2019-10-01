import React from 'react';
//import './App.css';
import Main from './components/Main'
import { Route } from 'react-router-dom'
import Rules from './components/Rules'
import Origin from './components/Origin'

function App() {
  return (
    <div className="App">
    <main>
    <Route exact path="/" component={Main} />
    <Route path="/rules/" component={Rules} />
    <Route path="/origin" component={Origin} />
    <div id='nav-bar'>
                    <div class='nav-title'>
                        <a href="/"><h1><b>CONWAY'S</b><br/> GAME OF LIFE</h1></a>
                    </div>

                    <div class='nav-box'>
                    <ul>
                        <li><a href="rules">RULES</a></li>
                        <li><a href="origin">ORIGIN</a></li>
                        <li><a href="/">PLAY</a></li>
                    </ul>
                    </div>
                </div>

    </main>
    </div>
  );
}

export default App;