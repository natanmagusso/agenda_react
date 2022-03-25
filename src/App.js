import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/HomePage.js';
import Developer from './components/DeveloperPage.js';
import Add from './components/AddSchedule.js';
import Edit from './components/EditSchedule.js'
import List from './components/ListSchedule.js';

function App() {
  return (
    <Router className="App">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link" to={"/"}>Home</Link>
          <Link className="nav-item nav-link" to={"/list"}>Registros</Link>
          <Link className="nav-item nav-link" to={"/developer"}>Desenvolvedor</Link>
        </div>
      </nav>
      <div className="container">  

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='/developer' element={<Developer/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
