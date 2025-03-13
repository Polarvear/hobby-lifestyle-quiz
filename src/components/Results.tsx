
import React from "react";
import { motion } from "framer-motion";
import { ResultType } from "../data/quizData";
import { Button } from "@/components/ui/button";

interface ResultsProps {
  result: ResultType;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onRestart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="heading-accent animate-fade-in">결과</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          당신의 라이프스타일: <span className="text-apple-blue">{result.primaryLifestyle}</span>
        </h1>
        <p className="text-apple-gray text-lg max-w-2xl mx-auto">
          {result.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-apple-silver"
        >
          <h3 className="text-xl font-semibold mb-4">당신의 성향</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-apple-gray mb-1">주요 성향</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">{result.primaryLifestyle}</span>
                <div className="w-32 h-2 bg-apple-silver/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-apple-blue rounded-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-apple-gray mb-1">부가 성향</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">{result.secondaryLifestyle}</span>
                <div className="w-32 h-2 bg-apple-silver/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-full bg-apple-blue/70 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-apple-silver"
        >
          <h3 className="text-xl font-semibold mb-4">이런 점이 특별해요</h3>
          <ul className="space-y-3">
            {[
              "새로운 아이디어와 경험을 추구합니다",
              "호기심이 많고 창의적인 활동을 즐깁니다",
              "자기 표현과 예술적 탐구를 중요시합니다",
              "다양한 문화와 관점에 개방적입니다"
            ].map((trait, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-apple-blue/10 flex items-center justify-center mt-0.5 mr-3">
                  <div className="w-2 h-2 rounded-full bg-apple-blue" />
                </div>
                <span>{trait}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          추천 취미 활동
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {result.recommendedHobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-apple-silver text-center card-hover"
            >
              <div className="w-12 h-12 bg-apple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <hobby.icon className="text-apple-blue" size={24} />
              </div>
              <h3 className="font-medium mb-2">{hobby.name}</h3>
              <p className="text-sm text-apple-gray">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center"
      >
        <Button
          onClick={onRestart}
          className="btn-primary"
        >
          테스트 다시하기
        </Button>
      </motion.div>
    </div>
  );
};

export default Results;
