import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import './index.css';

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
 <>
 <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
 </>
  );
}

export default App;
