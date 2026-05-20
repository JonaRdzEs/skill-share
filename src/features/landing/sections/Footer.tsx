import { Book } from "@/src/components/ui/icons";
import { FooterLink } from "../components/index";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-3 py-12 md:flex md:just-start md:items-center gap-10 lg:justify-center">
      <div className="">
        <div className="inline-flex justify-start items-center gap-1.5 mb-6">
          <Book
            width={26}
            height={26}
            strokeWidth={2}
            className="text-primary"
          />
          <span className="font-bold text-lg text-white">Skill Share</span>
        </div>
        <p>Empowering people to learn and teach skills that matter.</p>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-10 sm:justify-around">
        <div className="my-6">
          <h6 className="font-semibold text-white text-lg mb-3">Learn</h6>
          <FooterLink path="/sigin" text="Browse courses" />
          <FooterLink path="#popular-categories" text="Categories" />
        </div>
        <div>
          <h6 className="font-semibold text-white text-lg mb-3">Teach</h6>
          <FooterLink path="/sigin" text="Become Instructor" />
          <FooterLink path="#testimonials" text="Success Stories" />
        </div>
      </div>
    </footer>
  );
}
