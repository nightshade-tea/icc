'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Question from "@/components/Question";
import styles from "@/styles/index.module.css";

const questionData = {
  question: "Qual a sua fruta favorita?",
  options: ["Banana", "Maçã", "Laranja", "Tomate", "Goiaba"]
};

export default function Question1() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAnswer = (answer) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('question10', answer);
      router.push('/results');
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
          <Question
            question={questionData.question}
            options={questionData.options}
            onAnswer={handleAnswer}
          />
      </div>
    </main>
  );
}
