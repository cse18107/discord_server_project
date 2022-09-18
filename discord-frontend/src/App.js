import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </>
  );
}

export default App;
