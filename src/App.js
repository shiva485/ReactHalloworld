import React, { component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Classcomponent from './components/Classcomponent';
import Jsx from './components/Jsx';
import Propsex from './components/Propsex';
import Stateex from './components/Stateex';
import SetStateex from './components/SetStateex';
import Destructuring from './components/Destructuring';
import Eventhandling from './components/Eventhandling';
import Eventbind from './components/Eventbind'
import Parentcom from './components/Parentcomp'


function App() {
  return (
    <div className="App">
      
     
       {/* <Parentcom/>
      <Eventbind />
      <hr />
      <Eventhandling />
      <hr />
      <Destructuring name="murali" branch="ECE" id="1" adress="cheruvumadharam "></Destructuring> <hr />
      <SetStateex /> <hr />
      <Stateex /> <hr />
      <Propsex id='2' name="dinesh" ><p>hye hi how are you</p></Propsex> <hr />
      <Propsex id='2' name="ramesh" /> <hr />
      <Propsex id='3' name="praba" /> <hr />
      <Greet /> <hr />
      <Classcomponent /> <hr />
      <Jsx /> */}

<Greet/>
<Jsx/>
    </div>
  );
}

export default App;
