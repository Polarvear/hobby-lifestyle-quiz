
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuizContainer from "@/components/QuizContainer";

const Index = () => {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {!started ? (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <span className="heading-accent animate-fade-in">취미 & 라이프스타일</span>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              당신에게 맞는 <span className="text-apple-blue">취미</span>를 찾아보세요
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-apple-gray max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              간단한 질문에 답하고 당신의 라이프스타일에 맞는 새로운 취미를 발견하세요
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button onClick={handleStart} className="btn-primary text-lg px-8 py-6">
                테스트 시작하기 
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                title: "5가지 질문",
                description: "간단한 질문으로 당신의 성향을 파악합니다"
              },
              {
                title: "성향 분석",
                description: "당신의 라이프스타일 유형을 분석합니다"
              },
              {
                title: "맞춤 추천",
                description: "당신에게 어울리는 취미 활동을 추천해 드립니다"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-apple-silver"
              >
                <div className="w-10 h-10 rounded-full bg-apple-blue/10 flex items-center justify-center mb-4">
                  <span className="text-apple-blue font-semibold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-apple-gray">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <QuizContainer />
      )}
    </div>
  );
};

export default Index;
