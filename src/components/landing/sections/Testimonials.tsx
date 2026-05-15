import { Section } from "../Section";
import testimonialsData from "@/src/data/testimonials.json";
import { TestimonialCard } from "../TestimonialCard";

export function Testimonials() {
  const { testimonials } = testimonialsData;

  return (
    <Section
      id="testimonials"
      title="What Our Community Says"
      description="Real stories from real people"
      className="py-20 bg-linear-to-br from-indigo-50 to-blue-50"
      contentClassName=" container mx-auto px-3"
    >
      <div className="flex flex-wrap justify-center items-stretch gap-5">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}
