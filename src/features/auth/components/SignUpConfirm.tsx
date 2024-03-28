import React, { useState } from "react";
import AuthLayout from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import { autoSignIn, confirmSignUp } from "aws-amplify/auth";

export const SignUpConfirm = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  if (!email) {
    navigate("/auth/signup");
    return;
  }
  const [confirmationCode, setConfirmationCode] = useState("");

  const handleSignUpConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { isSignUpComplete } = await confirmSignUp({
        username: email,
        confirmationCode,
      });

      if (isSignUpComplete) {
        const { isSignedIn } = await autoSignIn();
        if (isSignedIn) {
          navigate("/app/home");
          sessionStorage.removeItem("email");
        }
      } else {
        throw new Error("Sign up failed");
      }
    } catch (error) {
      console.log("エラー: " + error);
    }

    setConfirmationCode("");
  };
  return (
    <AuthLayout title="アカウントの確認">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-gray-600 text-sm text-center">
          ご指定のメールアドレスに認証コードを送信しました。
          <br />
          認証コードをご入力のうえ、確認ボタンを押してください。
        </h2>
        <form className="space-y-6 mt-5" onSubmit={handleSignUpConfirm}>
          <div>
            <p className="block text-sm font-medium leading-6 text-gray-900">
              メールアドレス
            </p>
            <div className="mt-2">
              <p
                id="email"
                className="block w-full py-1.5 text-gray-900 sm:text-sm sm:leading-6"
              >
                {email}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmationCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                認証コード
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmationCode"
                name="confirmationCode"
                type="text"
                autoComplete="current-password"
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
              確認
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
