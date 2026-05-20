import Image from "next/image";
import { Link } from "@/src/components/ui";
import { RightArrow, Star } from "@/src/components/ui/icons";

export function HeroSection() {
  return (
    <section className="flex justify-around items-center pb-20 container mx-auto px-3 gap-6">
      <div>
        <div className="py-2 px-2 bg-primary/15 w-fit rounded-full flex justify-start items-center gap-1.5 mb-8 mx-auto md:px-4 md:ml-0">
          <Star width={16} height={16} className="text-primary-dark" />
          <p className="text-primary-dark text-sm">
            Trusted by 50,000+ learners worldwide
          </p>
        </div>
        <h1 className="text-primary-txt font-bold text-5xl text-center sm:text-5xl md:text-left xl:text-6xl">
          Learn New Skills,
          <br /> <span className="text-primary">Share Your Expertise</span>
        </h1>
        <p className="text-secondary-txt mt-8 text-center md:w-10/12 text-lg md:text-left">
          Connect with passionate instructors and curious learners. Master any
          skill from cooking to coding, art to entrepreneurship.
        </p>
        <div className="flex justify-center items-center gap-5 mt-8 flex-wrap md:justify-start">
          <Link
            href="/signup"
            className="flex justify-center items-center gap-2 rounded-lg bg-primary text-white p-4 w-47.5 hover:bg-blue-700 hover:scale-105 transition-all"
          >
            Start Learning
            <RightArrow />
          </Link>
          <Link
            href="/signup"
            className="block text-center border-2 border-secondary-txt/20 w-47.5 bg-white hover:bg-gray-100 rounded-lg text-primary-txt p-4 "
          >
            Become an Instructor
          </Link>
        </div>
      </div>
      <div className="hidden max-w-190 md:relative md:block w-full mx-auto">
        <div className="absolute inset-0 bg-linear-to-br from-blue-300 to-blue-500 rounded-2xl transform rotate-3 ml-auto mr-0 max-w-70 lg:max-w-120 xl:max-w-150" />
        <Image
          src="/hero-section.jpg"
          width={350}
          height={360}
          className="relative w-full max-w-70 h-90 rounded-lg ml-auto mr-0 object-cover lg:max-w-120 xl:max-w-150"
          alt="People learning together"
        />
      </div>
    </section>
  );
}
