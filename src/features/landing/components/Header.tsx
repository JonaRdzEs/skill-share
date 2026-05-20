import { HomeLink, Link } from "@/src/components/ui";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 py-3 px-8 border-b border-gray-200 bg-white">
      <nav className="container m-auto flex justify-between items-center">
        <HomeLink />
        <div className="justify-start items-center gap-9  hidden lg:flex">
          <Link href="#how-it-works">How It Works</Link>
          <Link href="#why-choose-us">Why Choose Us</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="/signin" className="text-primary hover:text-primary-dark">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-primary text-white text-center rounded-md p-2 w-32 transition-colors hover:bg-primary-dark"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
