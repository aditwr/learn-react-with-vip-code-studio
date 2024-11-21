import { useState } from "react";
import ButtonForm from "../components/Form/ButtonForm";
import PasswordInput from "../components/Form/PasswordInput";
import TextInput from "../components/Form/TextInput";
import { Link } from "react-router-dom";
import { login } from "../services/auth.service";

export default function FormLogin() {
  const [failedMessage, setFailedMessage] = useState("");

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(
            {
              username: e.target.username.value,
              password: e.target.password.value,
            },
            (success, response) => {
              if (success) {
                localStorage.setItem("token", response.data.token);
                window.location.href = "/products";
              } else {
                setFailedMessage(response.response.data);
              }
            }
          );
        }}
        method="POST"
        className="space-y-6"
      >
        <TextInput id="username" name="username" />
        <PasswordInput id="password" name="password" forgotPassword={true} />

        <ButtonForm>Sign in</ButtonForm>
      </form>
      {failedMessage && (
        <p className="mt-5 text-center text-red-500 text-sm/6">
          {failedMessage}
        </p>
      )}

      <p className="mt-10 text-center text-gray-500 text-sm/6">
        Not a member?{" "}
        <Link
          to={"/register"}
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
