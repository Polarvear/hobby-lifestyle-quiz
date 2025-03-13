
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { QuestionType } from "../data/quizData";

interface QuestionProps {
  question: QuestionType;
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, selectedOption, onSelectOption }) => {
  const handleOptionClick = (optionId: string) => {
    // Only proceed if this option isn't already selected
    if (selectedOption !== optionId) {
      onSelectOption(optionId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-8 text-center sm:text-3xl">
        {question.text}
      </h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
          >
            <div
              className={`option-card ${selectedOption === option.id ? "selected" : ""} cursor-pointer hover:bg-gray-50`}
              onClick={() => handleOptionClick(option.id)}
            >
              <div className="flex items-center justify-between">
                <span className="text-base sm:text-lg">{option.text}</span>
                {selectedOption === option.id && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-apple-blue text-white flex items-center justify-center"
                  >
                    <Check size={16} />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Question;
