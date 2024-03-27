import AuthLayout from "./AuthLayout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "aws-amplify/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { isSignedIn } = await signIn({
        username: email,
        password,
      });
      if (isSignedIn) {
        navigate('/app/home');
      } else {
        throw new Error("ログインに失敗しました");
      }
    } catch (error) {
      console.log(error);
    }
    setEmail('');
    setPassword('');
  }

  return (
    <AuthLayout title="Sign In">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
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
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="text-primary hover:text-primary-dark">
                  パスワードをお忘れですか？
                </a>
              </div>
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
              ログイン
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          アカウントをお持ちではないですか？{' '}
          <a href="/auth/signup" className="font-semibold leading-6 text-primary hover:text-primary-dark">
            登録する
          </a>
        </p>
      </div>
    </AuthLayout>
  )
}

export default SignIn