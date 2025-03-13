
import { Book, Music, Camera, Coffee, Bike, Palette, Plane, Gamepad, Dumbbell, CookingPot } from "lucide-react";

export type LifestyleType = 
  | "창의적 탐험가" 
  | "디지털 애호가" 
  | "액티브 모험가" 
  | "소셜 커넥터" 
  | "사색적 관찰자"
  | "요리 애호가";

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
    name: "사진 촬영",
    description: "순간을 포착하고 시각적 스토리텔링을 통해 당신만의 관점을 표현하세요.",
    icon: Camera,
    lifestyleMatch: ["창의적 탐험가", "사색적 관찰자"],
    score: 0
  },
  {
    id: "h2",
    name: "게임",
    description: "디지털 세계, 이야기 및 전략적 도전에 몰입하세요.",
    icon: Gamepad,
    lifestyleMatch: ["디지털 애호가", "소셜 커넥터"],
    score: 0
  },
  {
    id: "h3",
    name: "자전거 타기",
    description: "체력을 향상시키고 자연과 교감하며 자유와 탐험을 경험하세요.",
    icon: Bike,
    lifestyleMatch: ["액티브 모험가", "사색적 관찰자"],
    score: 0
  },
  {
    id: "h4",
    name: "독서",
    description: "문학을 통해 무수한 세계, 관점 및 아이디어를 탐색하세요.",
    icon: Book,
    lifestyleMatch: ["사색적 관찰자", "창의적 탐험가"],
    score: 0
  },
  {
    id: "h5",
    name: "커피 테이스팅",
    description: "전 세계의 독특한 맛 프로필과 추출 방법을 발견하세요.",
    icon: Coffee,
    lifestyleMatch: ["사색적 관찰자", "요리 애호가"],
    score: 0
  },
  {
    id: "h6",
    name: "디지털 아트",
    description: "디지털 도구를 사용하여 시각 예술을 만들고 무한한 창의적 가능성을 탐색하세요.",
    icon: Palette,
    lifestyleMatch: ["창의적 탐험가", "디지털 애호가"],
    score: 0
  },
  {
    id: "h7",
    name: "여행 계획",
    description: "독특한 여행 경험과 문화적 발견을 연구하고 큐레이션하세요.",
    icon: Plane,
    lifestyleMatch: ["창의적 탐험가", "소셜 커넥터"],
    score: 0
  },
  {
    id: "h8",
    name: "피트니스 훈련",
    description: "구조화된 운동 루틴을 통해 힘, 지구력 및 웰빙을 구축하세요.",
    icon: Dumbbell,
    lifestyleMatch: ["액티브 모험가", "사색적 관찰자"],
    score: 0
  },
  {
    id: "h9",
    name: "음악 탐색",
    description: "새로운 아티스트, 장르 및 영향력 있는 음악 이면의 이야기를 탐색하세요.",
    icon: Music,
    lifestyleMatch: ["창의적 탐험가", "소셜 커넥터"],
    score: 0
  },
  {
    id: "h10",
    name: "요리",
    description: "다양한 요리와 기술을 탐색하면서 맛있는 음식을 만드세요.",
    icon: CookingPot,
    lifestyleMatch: ["요리 애호가", "창의적 탐험가"],
    score: 0
  }
];

// Lifestyle descriptions
export const lifestyleDescriptions: Record<LifestyleType, string> = {
  "창의적 탐험가": "당신은 새로운 아이디어와 창의적인 표현에 활력을 얻습니다. 자연스럽게 호기심이 많고 독특한 관점과 예술적 노력을 발견하는 것을 즐깁니다.",
  "디지털 애호가": "당신은 기술과 디지털 문화에 열정적입니다. 혁신을 따라가고 디지털 도구를 활용하는 것을 즐깁니다.",
  "액티브 모험가": "당신은 신체 활동과 새로운 경험에서 충족감을 찾습니다. 몸과 모험심을 자극하는 도전을 가치 있게 여깁니다.",
  "소셜 커넥터": "당신은 의미 있는 인간 관계를 우선시합니다. 다른 사람들과의 상호 작용과 공유 경험에서 에너지를 얻습니다.",
  "사색적 관찰자": "당신은 깊이와 사려 깊음을 중요시합니다. 양보다 질을 중시하며 주의 깊은 관찰과 성찰에서 기쁨을 찾습니다.",
  "요리 애호가": "당신은 맛, 요리 기술 및 음식 문화에 대한 열정이 있습니다. 요리 제품을 만들고 경험하는 데서 기쁨을 찾습니다."
};

// Calculate the lifestyle scores based on the selected answers
export const calculateResults = (answers: string[]): ResultType => {
  // Initialize scores for each lifestyle type [Creative, Digital, Active, Social, Mindful, Culinary]
  let scores = [0, 0, 0, 0, 0, 0];
  
  // Map the lifestyle types to their index in the scores array
  const lifestyleTypes: LifestyleType[] = [
    "창의적 탐험가", 
    "디지털 애호가", 
    "액티브 모험가", 
    "소셜 커넥터", 
    "사색적 관찰자",
    "요리 애호가"
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
    description: `당신은 주로 ${primaryLifestyle} 성향이며, ${secondaryLifestyle}의 요소도 가지고 있습니다. ${lifestyleDescriptions[primaryLifestyle]}`
  };
};
