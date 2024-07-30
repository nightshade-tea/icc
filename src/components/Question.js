'use client'
import React, { useState } from 'react';
import styles from '@/styles/question.module.css';

export default function Question({ question, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
  };

  const handleDivClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <div
          key={index}
          className={`${styles.radio} ${selectedOption === option ? styles.checked : ''}`}
          onClick={() => handleDivClick(option)}
        >
          <input
            type="radio"
            id={`option${index}`}
            name="quiz"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            onClick={(e) => e.stopPropagation()}
          />
          <label htmlFor={`option${index}`}>{option}</label>
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