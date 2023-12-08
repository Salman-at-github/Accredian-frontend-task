import Exp from './components/Exp';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/exp' element={<Exp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
