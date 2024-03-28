import { Route, Routes } from 'react-router-dom'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import { SignUpConfirm } from '../components/SignUpConfirm';
import { Amplify } from 'aws-amplify';
import AwsAuthConfig from '@/config';
import { ResetPassword } from '../components/ResetPassword';
import { ResetPasswordConfirm } from '../components/ResetPasswordConfirm';

Amplify.configure({
  Auth: {
    Cognito: AwsAuthConfig,
  } 
});

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signup/confirm' element={<SignUpConfirm />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/reset-password/confirm' element={<ResetPasswordConfirm />} />
    </Routes>
  )
};
