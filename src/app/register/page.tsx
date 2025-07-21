import AuthLayout from "@/components/layout/AuthLayout";
import RegisterScreen from "@/features/auth/screens/RegisterScreen";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterScreen />
    </AuthLayout>
  );
}
