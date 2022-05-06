//import logo from './logo.svg';
import './App.css';
import OpeningScreen from './OpeningScreen'
import LogOrReg from './LogOrReg'
import Register from './Register'
import Login from './Login'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar'
// import Home from '@mui/icons-material/Home';
import Home from './page/Home';

import Profile from './page/Profile';
import Test from './page/Test';

//import Grade from './page/Grade';

//import { createLogger } from 'redux-logger';
// import {Switch } from 'react-switch';


function App() {

  return (
    <div>
      <Router>

        <Routes>
          <Route exact path="/" element={<OpeningScreen />} />
          <Route exact path="/OpeningScreen" element={<OpeningScreen />} />
          <Route exact path="/LogOrReg" element={<LogOrReg />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} /> 
          <Route exact path="/Sidebar" element={<Sidebar />} /> 
          <Route exact path="/Home" element={<Home />} /> 
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Test" element={<Test />} />
          {/* <Route exact path="/Grade" element={<Grade />} /> */}
            <Route exact path="*" The page not found />  

        </Routes>
      </Router >
      
    </div>
  );
}
export default App;