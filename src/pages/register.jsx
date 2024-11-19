import AuthLayout from "../layouts/AuthLayout";
import FormRegister from "../templates/FormRegister";
import PageLayout from "../layouts/PageLayout";

export default function Register() {
  return (
    <PageLayout>
      <AuthLayout description={"Create Your New Account"}>
        <FormRegister />
      </AuthLayout>
    </PageLayout>
  );
}
