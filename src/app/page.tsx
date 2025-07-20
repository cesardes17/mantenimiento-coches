import { redirect } from "next/navigation";

export default function HomePage() {
  // Siempre redirige al login de forma temporal
  redirect("/login/");
}
