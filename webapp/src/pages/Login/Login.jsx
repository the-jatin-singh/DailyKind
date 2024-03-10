import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../context/User/UserContext';

const Login = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/home" replace/>;
  }

  return (
    <div className='login-container'>
      Login
    </div>
  );
};

export default Login;