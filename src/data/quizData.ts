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

// The questions for the quiz in Korean
export const questions: QuestionType[] = [
  {
    id: "q1",
    text: "여가 시간을 어떻게 보내는 것을 선호하시나요?",
    options: [
      { id: "q1a", text: "손으로 무언가를 만들기", value: [2, 0, 0, 1, 1, 2] },
      { id: "q1b", text: "기술과 디지털 미디어 탐색하기", value: [1, 3, 0, 1, 0, 0] },
      { id: "q1c", text: "야외에서 신체 활동하기", value: [1, 0, 3, 1, 1, 0] },
      { id: "q1d", text: "친구들과 어울리기", value: [0, 1, 1, 3, 0, 1] },
      { id: "q1e", text: "조용한 환경에서 휴식하기", value: [1, 0, 0, 0, 3, 1] }
    ]
  },
  {
    id: "q2",
    text: "무엇이 당신에게 가장 큰 활력을 주나요?",
    options: [
      { id: "q2a", text: "새로운 아이디어와 관점 발견하기", value: [3, 1, 0, 1, 1, 0] },
      { id: "q2b", text: "도전적인 문제 해결하기", value: [1, 3, 1, 0, 1, 0] },
      { id: "q2c", text: "체력 활동과 도전", value: [0, 0, 3, 1, 0, 1] },
      { id: "q2d", text: "의미 있는 대화", value: [1, 0, 0, 3, 1, 1] },
      { id: "q2e", text: "감각적 경험과 맛", value: [1, 0, 1, 1, 2, 3] }
    ]
  },
  {
    id: "q3",
    text: "새로운 것을 배울 때 어떤 방식을 선호하시나요?",
    options: [
      { id: "q3a", text: "실험하고 직접 해내기", value: [2, 1, 2, 0, 0, 2] },
      { id: "q3b", text: "정보를 연구하고 분석하기", value: [1, 3, 0, 0, 2, 0] },
      { id: "q3c", text: "그룹이나 수업에 참여하기", value: [1, 0, 1, 3, 0, 1] },
      { id: "q3d", text: "숙련된 사람들 관찰하기", value: [2, 1, 1, 1, 2, 1] },
      { id: "q3e", text: "구조화된 튜토리얼 따르기", value: [1, 2, 1, 0, 1, 2] }
    ]
  },
  {
    id: "q4",
    text: "어떤 환경에서 가장 영감을 받으시나요?",
    options: [
      { id: "q4a", text: "미술관이나 갤러리 같은 예술 공간", value: [3, 0, 0, 1, 2, 0] },
      { id: "q4b", text: "현대적이고 기술 중심적인 환경", value: [0, 3, 0, 1, 0, 0] },
      { id: "q4c", text: "자연 속 야외 환경", value: [1, 0, 3, 0, 2, 0] },
      { id: "q4d", text: "활기찬 사회적 환경", value: [0, 0, 1, 3, 0, 2] },
      { id: "q4e", text: "조용하고 사색적인 공간", value: [1, 1, 0, 0, 3, 1] }
    ]
  },
  {
    id: "q5",
    text: "활동에서 가장 중요하게 생각하는 가치는 무엇인가요?",
    options: [
      { id: "q5a", text: "자기 표현과 창의성", value: [3, 1, 0, 1, 1, 1] },
      { id: "q5b", text: "성장과 기술 개발", value: [1, 2, 2, 0, 1, 2] },
      { id: "q5c", text: "신체적, 정신적 건강", value: [0, 0, 3, 0, 2, 1] },
      { id: "q5d", text: "연결과 공유 경험", value: [1, 0, 1, 3, 0, 1] },
      { id: "q5e", text: "문화적 감상과 지식", value: [2, 1, 0, 1, 3, 2] }
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
