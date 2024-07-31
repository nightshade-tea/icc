'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { questionData } from "@/data/questions";
import styles from '@/styles/question.module.css';

export default function Question({ id }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();
  const question = questionData[id - 1].question;
  const options = questionData[id - 1].options;

  const handleOptionChange = (event) => {
    const answer = options[event.target.id][1];
    setSelectedOption(answer);
  };

  const handleDivClick = (answer) => {
    setSelectedOption(answer);
  };

  const handleSubmit = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`question${id}`, selectedOption);

      if (id === 10) {
        router.push(`/results`);
      } else {
        router.push(`/question/${id + 1}`);
      }
    }
  };

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      {options.map((option, index) => (
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