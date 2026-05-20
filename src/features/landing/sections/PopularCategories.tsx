import { Section, CategoryChip } from "../components";

export function PopularCategories() {
  const categories = [
    "Design",
    "Photography",
    "Coding",
    "Business",
    "Marketing",
    "Music",
    "Writing",
    "Cooking",
    "Fitness",
    "Language",
    "Art",
    "Crafts",
  ];

  return (
    <Section
      id="popular-categories"
      title="Popular Categories"
      description="Explore skills across diverse fields"
      className="py-20 bg-white"
      contentClassName=" container mx-auto px-3"
    >
      <div className="flex justify-center items-center gap-3 flex-wrap">
        {categories.map((category) => (
          <CategoryChip key={category} title={category} />
        ))}
      </div>
    </Section>
  );
}
