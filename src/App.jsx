import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';

function App() {
  return (
      <Router>
         <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;