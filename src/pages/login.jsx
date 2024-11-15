import AuthLayout from "../layouts/AuthLayout";
import FormLogin from "../templates/FormLogin";

export default function Login() {
  return (
    <>
      <AuthLayout description={"Sign In to Your Account"}>
        <FormLogin />
      </AuthLayout>
    </>
  );
}
