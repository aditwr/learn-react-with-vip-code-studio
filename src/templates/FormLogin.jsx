import ButtonForm from "../components/Form/ButtonForm";
import EmailInput from "../components/Form/EmailInput";
import PasswordInput from "../components/Form/PasswordInput";
import { Link } from "react-router-dom";

export default function FormLogin() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("user", e.target.email.value);
          localStorage.setItem("password", e.target.password.value);
          window.location.href = "/products";
        }}
        method="POST"
        className="space-y-6"
      >
        <EmailInput />
        <PasswordInput forgotPassword={true} />

        <ButtonForm>Sign in</ButtonForm>
      </form>

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
