
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Manufacter from './Pages/Home/Manufacter';
import Warehouse from './Pages/Home/Warehouse';
import Financial from './Pages/Home/Financial';
import About from './images/About/About';
import Blog from './Pages/Home/Blog';
import AllSkill from './Pages/Home/AllSkill';
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manufacter' element={<Manufacter></Manufacter>}></Route>
        <Route path='/warehouse' element={<Warehouse></Warehouse>}></Route>
        <Route path='/financial' element={<Financial></Financial>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='/allskill' element={<AllSkill></AllSkill>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
