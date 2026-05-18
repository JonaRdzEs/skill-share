import { HomeLink } from "@/src/components/common/HomeLink";
import { SignInForm } from "@/src/components/auth/SignInForm";
import { Book, UsersGroup } from "@/src/components/common/icons";
import { SignInCardInfo } from "@/src/components/auth/SignInCardInfo";

export default function SignInPage() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <section className="hidden lg:flex bg-linear-to-tr from-blue-500 to-blue-600 flex-col gap-5 justify-center items-start px-16 xl:px-36">
        <h2 className="text-white font-bold text-3xl">Welcome Back!</h2>
        <p className="text-white text-lg">
          Continue your learning journey and connect with your community
        </p>
        <div className="rounded-lg bg-primary/50 flex justify-start items-start flex-col gap-8 py-4 px-7 w-full max-w-lg">
          <SignInCardInfo
            icon={<Book className="text-white" />}
            title="500+ Skills"
            text="Available to learn"
          />
          <SignInCardInfo
            icon={<UsersGroup className="text-white" />}
            title="10,000+ Students"
            text="Active community"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-60">
        <HomeLink />
        <form className="w-full max-w-4xl px-5 flex flex-col justify-stretch items-center">
          <h2 className="text-primary-txt text-center text-3xl font-bold mt-8 mb-4">
            Sign in to your account
          </h2>
          <p className="text-secondary-txt text-center">
            Access your learning dashboard
          </p>
          <SignInForm />
        </form>
      </section>
    </div>
  );
}
