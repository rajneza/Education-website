
import './App.css';
import Home from './Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Signin from './Sign_in';
import Signup from './Signup';
import Profile from './Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
