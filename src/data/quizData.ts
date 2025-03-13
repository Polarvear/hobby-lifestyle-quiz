
import { Book, Music, Camera, Coffee, Bike, Palette, Plane, Gamepad, Dumbbell, CookingPot } from "lucide-react";

export type LifestyleType = 
  | "Creative Explorer" 
  | "Digital Enthusiast" 
  | "Active Adventurer" 
  | "Social Connector" 
  | "Mindful Observer"
  | "Culinary Enthusiast";

export type OptionType = {
  id: string;
  text: string;
  value: number[];
};

export type QuestionType = {
  id: string;
  text: string;
  options: OptionType[];
};

export type HobbyType = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  lifestyleMatch: LifestyleType[];
  score: number;
};

export type ResultType = {
  primaryLifestyle: LifestyleType;
  secondaryLifestyle: LifestyleType;
  recommendedHobbies: HobbyType[];
  description: string;
};

// The questions for the quiz
export const questions: QuestionType[] = [
  {
    id: "q1",
    text: "How do you prefer to spend your free time?",
    options: [
      { id: "q1a", text: "Creating something with my hands", value: [2, 0, 0, 1, 1, 2] },
      { id: "q1b", text: "Exploring technology and digital media", value: [1, 3, 0, 1, 0, 0] },
      { id: "q1c", text: "Being physically active outdoors", value: [1, 0, 3, 1, 1, 0] },
      { id: "q1d", text: "Socializing with friends", value: [0, 1, 1, 3, 0, 1] },
      { id: "q1e", text: "Relaxing in a calm environment", value: [1, 0, 0, 0, 3, 1] }
    ]
  },
  {
    id: "q2",
    text: "What energizes you the most?",
    options: [
      { id: "q2a", text: "Discovering new ideas and perspectives", value: [3, 1, 0, 1, 1, 0] },
      { id: "q2b", text: "Solving challenging problems", value: [1, 3, 1, 0, 1, 0] },
      { id: "q2c", text: "Physical activities and challenges", value: [0, 0, 3, 1, 0, 1] },
      { id: "q2d", text: "Meaningful conversations", value: [1, 0, 0, 3, 1, 1] },
      { id: "q2e", text: "Sensory experiences and tastes", value: [1, 0, 1, 1, 2, 3] }
    ]
  },
  {
    id: "q3",
    text: "How do you approach learning something new?",
    options: [
      { id: "q3a", text: "By experimenting and being hands-on", value: [2, 1, 2, 0, 0, 2] },
      { id: "q3b", text: "By researching and analyzing information", value: [1, 3, 0, 0, 2, 0] },
      { id: "q3c", text: "By joining groups or classes", value: [1, 0, 1, 3, 0, 1] },
      { id: "q3d", text: "By observing others who are skilled", value: [2, 1, 1, 1, 2, 1] },
      { id: "q3e", text: "By following structured tutorials", value: [1, 2, 1, 0, 1, 2] }
    ]
  },
  {
    id: "q4",
    text: "What environment do you find most inspiring?",
    options: [
      { id: "q4a", text: "Artistic spaces like museums or galleries", value: [3, 0, 0, 1, 2, 0] },
      { id: "q4b", text: "Modern, tech-focused environments", value: [0, 3, 0, 1, 0, 0] },
      { id: "q4c", text: "Natural outdoor settings", value: [1, 0, 3, 0, 2, 0] },
      { id: "q4d", text: "Bustling social environments", value: [0, 0, 1, 3, 0, 2] },
      { id: "q4e", text: "Quiet, contemplative spaces", value: [1, 1, 0, 0, 3, 1] }
    ]
  },
  {
    id: "q5",
    text: "What do you value most in your activities?",
    options: [
      { id: "q5a", text: "Self-expression and creativity", value: [3, 1, 0, 1, 1, 1] },
      { id: "q5b", text: "Growth and skill development", value: [1, 2, 2, 0, 1, 2] },
      { id: "q5c", text: "Physical and mental health", value: [0, 0, 3, 0, 2, 1] },
      { id: "q5d", text: "Connection and shared experiences", value: [1, 0, 1, 3, 0, 1] },
      { id: "q5e", text: "Cultural appreciation and knowledge", value: [2, 1, 0, 1, 3, 2] }
    ]
  }
];

// Available hobbies with their attributes
export const hobbies: HobbyType[] = [
  {
    id: "h1",
    name: "Photography",
    description: "Capture moments and express your unique perspective through visual storytelling.",
    icon: Camera,
    lifestyleMatch: ["Creative Explorer", "Mindful Observer"],
    score: 0
  },
  {
    id: "h2",
    name: "Gaming",
    description: "Immerse yourself in digital worlds, narratives, and strategic challenges.",
    icon: Gamepad,
    lifestyleMatch: ["Digital Enthusiast", "Social Connector"],
    score: 0
  },
  {
    id: "h3",
    name: "Cycling",
    description: "Experience freedom and exploration while improving fitness and connecting with nature.",
    icon: Bike,
    lifestyleMatch: ["Active Adventurer", "Mindful Observer"],
    score: 0
  },
  {
    id: "h4",
    name: "Reading",
    description: "Explore countless worlds, perspectives, and ideas through literature.",
    icon: Book,
    lifestyleMatch: ["Mindful Observer", "Creative Explorer"],
    score: 0
  },
  {
    id: "h5",
    name: "Coffee Tasting",
    description: "Discover unique flavor profiles and brewing methods from around the world.",
    icon: Coffee,
    lifestyleMatch: ["Mindful Observer", "Culinary Enthusiast"],
    score: 0
  },
  {
    id: "h6",
    name: "Digital Art",
    description: "Create visual art using digital tools and explore endless creative possibilities.",
    icon: Palette,
    lifestyleMatch: ["Creative Explorer", "Digital Enthusiast"],
    score: 0
  },
  {
    id: "h7",
    name: "Travel Planning",
    description: "Research and curate unique travel experiences and cultural discoveries.",
    icon: Plane,
    lifestyleMatch: ["Creative Explorer", "Social Connector"],
    score: 0
  },
  {
    id: "h8",
    name: "Fitness Training",
    description: "Build strength, endurance and wellness through structured exercise routines.",
    icon: Dumbbell,
    lifestyleMatch: ["Active Adventurer", "Mindful Observer"],
    score: 0
  },
  {
    id: "h9",
    name: "Music Discovery",
    description: "Explore new artists, genres, and the stories behind influential music.",
    icon: Music,
    lifestyleMatch: ["Creative Explorer", "Social Connector"],
    score: 0
  },
  {
    id: "h10",
    name: "Cooking",
    description: "Create delicious meals while exploring different cuisines and techniques.",
    icon: CookingPot,
    lifestyleMatch: ["Culinary Enthusiast", "Creative Explorer"],
    score: 0
  }
];

// Lifestyle descriptions
export const lifestyleDescriptions: Record<LifestyleType, string> = {
  "Creative Explorer": "You thrive on new ideas and creative expression. You're naturally curious and enjoy discovering unique perspectives and artistic endeavors.",
  "Digital Enthusiast": "You're passionate about technology and digital culture. You enjoy staying current with innovations and leveraging digital tools.",
  "Active Adventurer": "You find fulfillment in physical activity and new experiences. You value challenges that engage your body and adventurous spirit.",
  "Social Connector": "You prioritize meaningful human connections. Your energy comes from interactions and shared experiences with others.",
  "Mindful Observer": "You appreciate depth and thoughtfulness. You value quality over quantity and find joy in careful observation and reflection.",
  "Culinary Enthusiast": "You have a passion for flavors, cooking techniques, and food culture. You find joy in creating and experiencing culinary delights."
};

// Calculate the lifestyle scores based on the selected answers
export const calculateResults = (answers: string[]): ResultType => {
  // Initialize scores for each lifestyle type [Creative, Digital, Active, Social, Mindful, Culinary]
  let scores = [0, 0, 0, 0, 0, 0];
  
  // Map the lifestyle types to their index in the scores array
  const lifestyleTypes: LifestyleType[] = [
    "Creative Explorer", 
    "Digital Enthusiast", 
    "Active Adventurer", 
    "Social Connector", 
    "Mindful Observer",
    "Culinary Enthusiast"
  ];
  
  // Calculate the scores based on the selected answers
  questions.forEach((question, qIndex) => {
    const selectedOptionId = answers[qIndex];
    const selectedOption = question.options.find(option => option.id === selectedOptionId);
    
    if (selectedOption) {
      // Add the values of the selected option to the scores
      selectedOption.value.forEach((val, index) => {
        scores[index] += val;
      });
    }
  });
  
  // Find the highest and second highest scores
  let highestIndex = 0;
  let secondHighestIndex = 0;
  
  scores.forEach((score, index) => {
    if (score > scores[highestIndex]) {
      secondHighestIndex = highestIndex;
      highestIndex = index;
    } else if (score > scores[secondHighestIndex] && index !== highestIndex) {
      secondHighestIndex = index;
    }
  });
  
  const primaryLifestyle = lifestyleTypes[highestIndex];
  const secondaryLifestyle = lifestyleTypes[secondHighestIndex];
  
  // Calculate hobby recommendations
  const updatedHobbies = [...hobbies].map(hobby => {
    // Score based on lifestyle match
    let hobbyScore = 0;
    
    if (hobby.lifestyleMatch.includes(primaryLifestyle)) {
      hobbyScore += 3;
    }
    
    if (hobby.lifestyleMatch.includes(secondaryLifestyle)) {
      hobbyScore += 2;
    }
    
    return { ...hobby, score: hobbyScore };
  });
  
  // Sort hobbies by score and get top recommendations
  const recommendedHobbies = updatedHobbies
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
  
  return {
    primaryLifestyle,
    secondaryLifestyle,
    recommendedHobbies,
    description: `You primarily identify as a ${primaryLifestyle} with elements of ${secondaryLifestyle}. ${lifestyleDescriptions[primaryLifestyle]}`
  };
};
