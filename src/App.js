//import logo from './logo.svg';
import './App.css';
import OpeningScreen from './OpeningScreen'
import LogOrReg from './LogOrReg'
import Register from './Register'
import Login from './Login'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import {Switch } from 'react-switch';


function App() {


  return (
    <div>
      <Router>

        {/* <ul>
          <li>
            <Link to="/"> OpenScreen</Link>
          </li>
          <li>
            <Link to="/OpeningScreen"> OpeningScreen</Link>
          </li>
          <li>
            <Link to="/LogOrReg"> LogOrReg</Link>
          </li>
        </ul> */}
        <Routes>
          <Route exact path="/" element={<OpeningScreen />} />

          <Route exact path="/OpeningScreen" element={<OpeningScreen />} />
          <Route exact path="/LogOrReg" element={<LogOrReg />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />

          {/* <Route exact path="*" The page not found /> */}

        </Routes>
      </Router >
    </div>
  );
}
export default App;
    // <div className="App">
    //   <header className="App-header">

    //    <OpeningScreen/>

    //   </header>
    // </div>


















