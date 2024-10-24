import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Add from './components/Add';
import Viewall from './components/Viewall';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
