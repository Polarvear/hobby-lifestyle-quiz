
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Results from "./Results";
import { questions, calculateResults, ResultType } from "../data/quizData";

const QuizContainer: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [result, setResult] = useState<ResultType | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (optionId: string) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = optionId;
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate and display results
      const quizResult = calculateResults(selectedOptions);
      setResult(quizResult);
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setResult(null);
    setIsCompleted(false);
  };

  const selectedOption = selectedOptions[currentQuestion] || null;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-4xl mx-auto p-4 sm:p-6"
    >
      {!isCompleted ? (
        <>
          <ProgressBar
            currentStep={currentQuestion + 1}
            totalSteps={questions.length}
          />
          
          <AnimatePresence mode="wait">
            <Question
              key={questions[currentQuestion].id}
              question={questions[currentQuestion]}
              selectedOption={selectedOption}
              onSelectOption={handleSelectOption}
            />
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedOption ? 1 : 0 }}
            className="mt-8 flex justify-center"
          >
            <Button
              onClick={handleNext}
              className="btn-primary"
              disabled={!selectedOption}
            >
              {isLastQuestion ? "결과 보기" : "다음"}
              <ArrowRight size={16} className="ml-1.5" />
            </Button>
          </motion.div>
        </>
      ) : (
        result && <Results result={result} onRestart={handleRestart} />
      )}
    </motion.div>
  );
};

export default QuizContainer;
