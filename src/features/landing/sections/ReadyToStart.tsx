import { Link } from "@/src/components/ui";
import { RightArrow } from "@/src/components/ui/icons";

export function ReadyToStart() {
  return (
    <section className="bg-linear-to-r from-primary to to-blue-600 py-16 px-5 sm:min-h-70">
      <h2 className="font-bold text-white text-3xl text-center">
        Ready to Start Your Journey?
      </h2>
      <p className="text-white text-center mt-4">
        Join thousands of learners and instructors transforming their lives
        through skill sharing
      </p>
      <div className="flex justify-center items-center flex-wrap gap-4 mt-8">
        <Link href="/signup" className="text-primary bg-white w-full max-w-60 rounded-lg flex justify-center items-center gap-2 py-4 px-5 hover:scale-105 transition-all">
          Get Started Free
          <RightArrow />
        </Link>
        <Link href="/signin" className="border-2 rounded-lg border-white py-4 px-5 text-white w-full max-w-60 text-center hover:bg-white/10">Explore Courses</Link>
      </div>
    </section>
  );
}
