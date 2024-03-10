import { Route, Routes } from 'react-router-dom';
import FirstLoader from './pages/FirstLoader/FirstLoader';
import Suggestion from './pages/Suggestion/Suggestion';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './Auth/PrivateRoute';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className='app relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<FirstLoader />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/suggestion' element={<PrivateRoute><Suggestion /></PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default App
