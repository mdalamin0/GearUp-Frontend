import { Button } from "@/components/ui/button";
import RegisterBanner from "../_components/RegisterBanner";
import RegisterForm from "../_components/RegisterForm";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";


const RegisterPage = () => {
  return (
    <main className="min-h-screen bg-muted/20">
      <section className="container pt-10">
        <Button variant="ghost" asChild>
          <Link href="/">
            {" "}
            <FaArrowLeft /> Back to Home
          </Link>
        </Button>
        <div className=" flex min-h-screen items-center pb-10">
          <div className="grid w-full overflow-hidden rounded-3xl border bg-background shadow-xl lg:grid-cols-2">
            <RegisterBanner />

            <RegisterForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
