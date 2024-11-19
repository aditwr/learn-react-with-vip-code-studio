import AuthLayout from "../layouts/AuthLayout";
import FormLogin from "../templates/FormLogin";
import PageLayout from "../layouts/PageLayout";

export default function Login() {
  return (
    <PageLayout>
      <AuthLayout description={"Sign In to Your Account"}>
        <FormLogin />
      </AuthLayout>
    </PageLayout>
  );
}
