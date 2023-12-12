import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Home, Work, Life, Contact} from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/work" element={<Work/>} />
                <Route path="/life" element={<Life/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    </main>
  )
}

export default App