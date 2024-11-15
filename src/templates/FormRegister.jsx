import ButtonForm from "../components/Form/ButtonForm";
import EmailInput from "../components/Form/EmailInput";
import PasswordInput from "../components/Form/PasswordInput";
import { Link } from "react-router-dom";

export default function FormRegister() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" className="space-y-6">
        <EmailInput />
        <PasswordInput />
        <PasswordInput label="Password Confirmation" />

        <ButtonForm>Register</ButtonForm>
      </form>

      <p className="mt-10 text-center text-gray-500 text-sm/6">
        Already a member?{" "}
        <Link
          to="/login"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
