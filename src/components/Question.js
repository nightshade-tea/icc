'use client'
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import questions from "@/data/questions.json";
import styles from '@/styles/question.module.css';

export default function Question({ id }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const router = useRouter();
  const question = questions[id - 1].question;
  const options = questions[id - 1].options;

  useEffect(() => {
    setShuffledOptions(shuffleArray(options));
  }, [options]);

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleOptionChange = (event) => {
    const answer = shuffledOptions[event.target.id][1];
    setSelectedOption(answer);
  };

  const handleDivClick = (answer) => {
    setSelectedOption(answer);
  };

  const handleSubmit = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`question${id}`, selectedOption);

      if (id === 8) {
        router.push(`/results`);
      } else {
        router.push(`/question/${id + 1}`);
      }
    }
  };

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      {shuffledOptions.map((option, index) => (
        <div
          key={index}
          className={`${styles.radio} ${selectedOption === option[1] ? styles.checked : ''}`}
          onClick={() => handleDivClick(option[1])}
        >
          <input
            type="radio"
            id={index}
            name="quiz"
            value={option[0]}
            checked={selectedOption === option[1]}
            onChange={handleOptionChange}
            onClick={(e) => e.stopPropagation()}
          />
          <label htmlFor={index}>{option[0]}</label>
        </div>
      ))}
      <button
        className={styles.submit}
        onClick={handleSubmit}
        disabled={selectedOption === null}
      >
        Continuar
      </button>
    </div>
  );
}