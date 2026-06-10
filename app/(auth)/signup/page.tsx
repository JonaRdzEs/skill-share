import { HomeLink, Link } from "@/src/components/ui";
import { Checkbox } from "@/src/components/ui/icons";
import { SignUpForm } from "@/src/features/auth/components";

export default function SignUpPage() {
  const reasons = [
    "Learn from expert instructors worldwide",
    "Teach and share your skills with others",
    "Flexible scheduling that fits your life",
    "Join a supportive learning community",
  ];

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <section className="flex flex-col justify-center items-center min-h-screen">
        <HomeLink className="[&_span:first-of-type]:text-2xl [&_svg:first-of-type]:w-8 [&_svg:first-of-type]:h-8" />
        <div className="w-full max-w-4xl px-5 flex flex-col justify-stretch items-center">
          <h2 className="text-primary-txt text-center text-4xl font-bold mt-8 mb-4">
            Create your account
          </h2>
          <p className="text-secondary-txt text-center">
            Join thousands of learners and instructors
          </p>
          <SignUpForm />
          <div className="flex justify-center items-center gap-3">
            <p className="text-secondary-txt text-sm">
              Already have an account?
            </p>
            <Link
              href="/signin"
              variant="primary"
              className="font-semibold text-sm"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
      <section className="hidden lg:flex bg-linear-to-tr from-blue-500 to-blue-600 flex-col justify-center items-start px-16 xl:px-34">
        <h2 className="text-white font-bold text-4xl">
          Start Your Learning Journey Today
        </h2>
        <p className="text-white text-lg mt-8"> 
          Join our community and unlock endless possibilities to learn and teach
        </p>
        <ul className="flex flex-col gap-5 mt-15">
          {reasons.map((item, idx) => (
            <li key={`${item} ${idx}`} className="text-white flex justify-start items-center gap-2">
              <Checkbox />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
