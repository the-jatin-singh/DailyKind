import { Route, Routes } from 'react-router-dom';
import FirstLoader from './pages/FirstLoader/FirstLoader';
import Suggestion from './pages/Suggestion/Suggestion';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './Auth/PrivateRoute';
import Navbar from './components/Navbar/Navbar';
import Help from './pages/Help/Help';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='app relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<FirstLoader />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path='/help' element={<Help />} />
        <Route path='/suggestion' element={<PrivateRoute><Suggestion /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
