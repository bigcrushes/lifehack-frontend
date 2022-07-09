import {useState, React} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, withRouter } from 'react-router-dom'
import Box from '@mui/material/Box';
import Home from './components/home';
import Bankpage from './components/bankpage';
import Userpage from './components/userpage';



function App() {
  
  return (
    <Router>
      <div className="App">
        
        <div className="auth-wrapper">
          <div className="auth-inner">
          <Box sx={{pt: 7.5}}>
              <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route exact path="/bankpage" element={<Bankpage />}  />
                <Route exact path="/userpage" element={<Userpage />}  />
              </Routes>
            </Box>
          </div>
        </div>
      </div> 
    </Router>
    
  )
}

export default App