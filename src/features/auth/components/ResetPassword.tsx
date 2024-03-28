import { useState } from "react";
import AuthLayout from "./AuthLayout";
import { resetPassword } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { nextStep } = await resetPassword({ username: email });
      switch (nextStep.resetPasswordStep) {
        case "CONFIRM_RESET_PASSWORD_WITH_CODE":
          sessionStorage.setItem("email", email);
          navigate("/auth/reset-password/confirm");
          break;
        case "DONE":
          setEmail("");
          navigate("auth/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthLayout title="パスワードの再設定">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-gray-600 text-sm text-center">
          パスワードを再設定する
          <br />
          メールアドレスを入力してください。
        </h2>
        <form className="space-y-6 mt-5" onSubmit={handleResetPassword}>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                メールアドレス
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark"
            >
              認証コード送信
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
