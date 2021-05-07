import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter"
import CounterRedux from "./components/CounterRedux"
import Profile from './components/Profile';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const alias = useSelector(state => state.profile.alias);
  return (
    <div className="App">

      

      <h1>Redux Intro</h1>

      <h2>Välkommen {alias}!</h2>

      <Profile/>

      <div>Eget state - no Redux
        <Counter></Counter>
        <Counter/>
      </div>
      <div>Redux state
      <CounterRedux/>
      <CounterRedux/>
      </div>
      
    </div>
  );
}

export default App;
