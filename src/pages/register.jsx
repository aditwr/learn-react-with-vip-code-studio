import AuthLayout from "../layouts/AuthLayout";
import FormRegister from "../templates/FormRegister";

export default function Register() {
  return (
    <>
      <AuthLayout description={"Create Your New Account"}>
        <FormRegister />
      </AuthLayout>
    </>
  );
}
