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
    setSelectedOption(event.target.id);
  };

  const handleDivClick = (optionId) => {
    setSelectedOption(optionId);
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
          className={`${styles.radio} ${selectedOption === index ? styles.checked : ''}`}
          onClick={() => handleDivClick(index)}
        >
          <input
            type="radio"
            id={index}
            name="quiz"
            value={option}
            checked={selectedOption === index}
            onChange={handleOptionChange}
            onClick={(e) => e.stopPropagation()}
          />
          <label htmlFor={index}>{option}</label>
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