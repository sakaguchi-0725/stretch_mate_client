import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout"
import { useState } from "react";
import { confirmResetPassword } from "aws-amplify/auth";

export const ResetPasswordConfirm = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const email = sessionStorage.getItem("email");
  if (!email) {
    navigate("/auth/password-reset");
  }

  const handleConfirmResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await confirmResetPassword({
        username: email!,
        newPassword,
        confirmationCode
      })
      sessionStorage.removeItem("email");
      setNewPassword("");
      setConfirmationCode("");

      navigate("/auth/signin");
    } catch (error) {
      console.log(error);
      navigate("/auth/reset-password");
    }
  }

  return (
    <AuthLayout title="パスワードの再設定">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className='text-gray-600 text-sm text-center'>
          新しいパスワードとメールアドレスにお送りした<br />
          認証コードを入力してください。
        </h2>
        <form className="space-y-6 mt-5" onSubmit={handleConfirmResetPassword}>
          <div>
            <p className="block text-sm font-medium leading-6 text-gray-900">
              メールアドレス
            </p>
            <div className="mt-2">
              <p id="email" className='block w-full py-1.5 text-gray-900 sm:text-sm sm:leading-6'>{email}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
                新しいパスワード
              </label>
            </div>
            <div className="mt-2">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="confirmationCode" className="block text-sm font-medium leading-6 text-gray-900">
                認証コード
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmationCode"
                name="confirmationCode"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark"
            >
              パスワードを再設定する
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
