import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Nav from './components/Nav';
import Start from './components/Start'

function App() {
  return (
    <div className='bg-[#141414] h-screen w-full'>
      <Nav/>
      aa
      <BrowserRouter>
        <Routes>
          <Route index path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
