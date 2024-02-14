
import React from 'react';
import NavBar from './components/NavBar';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs /> } />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
    </Router>
  );
}

export default App;
