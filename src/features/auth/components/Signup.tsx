import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import { signUp } from "aws-amplify/auth";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { nextStep } = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
            name: username,
          },
          autoSignIn: {
            authFlowType: "USER_SRP_AUTH",
          }
        },
      });

      if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
        sessionStorage.setItem('email', email);
        navigate("/auth/signup/confirm");
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        throw new Error("Unexpected signUpStep value: " + nextStep.signUpStep);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthLayout title="Sign Up">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
              ユーザー名
            </label>
            <div className="mt-2">
              <input
                id="userName"
                name="userName"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              メールアドレス
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                パスワード
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark"
            >
              登録
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          アカウントをお持ちですか？{' '}
          <a href="/auth/signin" className="font-semibold leading-6 text-primary hover:text-primary-dark">
            ログインする
          </a>
        </p>
      </div>
    </AuthLayout>
  )
}

export default SignUp