import { Route, Routes } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
};
