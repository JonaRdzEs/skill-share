import { HomeLink, Link } from "@/src/components/ui";
import { Book, UsersGroup } from "@/src/components/ui/icons";
import { SignInForm, SignInCardInfo } from "@/src/features/auth/components";

export default function SignInPage() {
  return (
    <div className="min-h-screen block lg:grid lg:grid-cols-2">
      <section className="hidden lg:flex bg-linear-to-tr from-blue-500 to-blue-600 flex-col gap-5 justify-center items-start px-16 xl:px-36">
        <h2 className="text-white font-bold text-4xl">Welcome Back!</h2>
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
      <section className="flex flex-col justify-center items-center min-h-screen">
        <HomeLink  className="[&_span:first-of-type]:text-2xl [&_svg:first-of-type]:w-8 [&_svg:first-of-type]:h-8" />
        <div className="w-full max-w-4xl px-5 flex flex-col justify-stretch items-center">
          <h2 className="text-primary-txt text-center text-4xl font-bold mt-8 mb-4">
            Sign in to your account
          </h2>
          <p className="text-secondary-txt text-center">
            Access your learning dashboard
          </p>
          <SignInForm />
          <div className="flex justify-center items-center gap-3">
            <p className="text-secondary-txt text-sm">{"Don't have an account?"}</p>
            <Link href="/signup" variant="primary" className="font-semibold text-sm">Sign up for free</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
