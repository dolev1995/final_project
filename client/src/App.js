//import logo from './logo.svg';

import './App.css';
import OpeningScreen from './OpeningScreen'
import LogOrReg from './LogOrReg'
import Register from './Register'
import Login from './Login'
import Footer from './Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidbar/Sidebar'
// import Home from '@mui/icons-material/Home';
import Home from './components/page/Home';
import Profile from './components/page/Profile';
import Test from './components/tests-by-class/ChooseTest';
import WarsixDay from './components/test/Test';
import Class from './components/Classes/Class'
import Grade from './components/page/viewGrade'
import Admin from './Admin'

//import Grade from './page/Grade';

//import { createLogger } from 'redux-logger';
// import {Switch } from 'react-switch';


function App() {
console.log('App')
  return (
    <div>
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
          <Route exact path="/class" element={<Class />} />
          <Route exact path="/Grade" element={<Grade />} />
          <Route exact path="/Admin" element={<Admin />} />



          <Route exact path="/warsixDay" element={<WarsixDay />} />
          {/* <Route exact path="/Grade" element={<Grade />} /> */}
            <Route exact path="*" The page not found />  

        </Routes>
      </Router >
      </div>
      <Footer/>
    </div>
  );
}
export default App;