export interface LearnCardData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  estimatedTime: string; // e.g., "15 min", "30 min"
  difficulty: "beginner" | "intermediate" | "advanced";
  href: string; // route to the content
}

export const learnCards: LearnCardData[] = [
  {
    id: "carbon-footprint",
    title: "Cut Your Carbon Footprint Today",
    description: "Learn your biggest emission sources and fix them first",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "20 min",
    difficulty: "beginner",
    href: "/learn/carbon-footprint",
  },
  {
    id: "high-impact-actions",
    title: "Know Which Actions Actually Help Climate",
    description: "See which changes make real impact vs. feel-good theater",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "15 min",
    difficulty: "beginner",
    href: "/learn/high-impact-actions",
  },
  {
    id: "climate-basics",
    title: "Understand Climate Change in 15 Minutes",
    description: "Get the science, causes, and effects without the jargon",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "15 min",
    difficulty: "beginner",
    href: "/learn/climate-basics",
  },
  {
    id: "energy-efficiency",
    title: "Stop Wasting Energy and Money",
    description: "Find where you're bleeding energy and plug the leaks",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "25 min",
    difficulty: "beginner",
    href: "/learn/energy-efficiency",
  },
  {
    id: "sustainable-food",
    title: "Make Sustainable Food Choices",
    description: "Discover which foods have the lowest environmental cost",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "20 min",
    difficulty: "beginner",
    href: "/learn/sustainable-food",
  },
  {
    id: "plastic-reduction",
    title: "Reduce Plastic Waste Starting Now",
    description:
      "Identify your plastic sources and eliminate them systematically",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "15 min",
    difficulty: "beginner",
    href: "/learn/plastic-reduction",
  },
  {
    id: "sustainable-travel",
    title: "Travel Without Destroying the Planet",
    description: "Calculate trip emissions and choose lower-impact options",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "20 min",
    difficulty: "intermediate",
    href: "/learn/sustainable-travel",
  },
  {
    id: "conscious-consumption",
    title: "Buy Things That Last and Matter",
    description: "Evaluate durability and environmental cost before purchasing",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "25 min",
    difficulty: "intermediate",
    href: "/learn/conscious-consumption",
  },
  {
    id: "climate-communication",
    title: "Talk Climate Without Sounding Preachy",
    description: "Communicate effectively without alienating people",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "30 min",
    difficulty: "intermediate",
    href: "/learn/climate-communication",
  },
  {
    id: "climate-resilience",
    title: "Get Your Home Climate-Ready",
    description: "Prepare for extreme weather and reduce vulnerability",
    imageUrl: "/images/placeholder.jpg",
    estimatedTime: "35 min",
    difficulty: "intermediate",
    href: "/learn/climate-resilience",
  },
];
