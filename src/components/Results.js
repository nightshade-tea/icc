'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/results.module.css";
import { nameMapping, imageMapping, descMapping } from "@/data/mappings";

const AgainButton = () => {
  const router = useRouter();

  const handleClick = () => {
    for (let i = 1; i <= 8; i++) {
      localStorage.removeItem(`question${i}`);
    }
    router.push("/");
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      Jogar novamente
    </button>
  );
}

function getAnswers() {
  const storedAnswers = [];

  for (let i = 1; i <= 8; i++) {
    const optionId = localStorage.getItem(`question${i}`);
    storedAnswers.push(optionId);
  }

  return storedAnswers;
}

function computeResults(answers) {
  const count = {
    "ada": 0,
    "annie": 0,
    "brenda": 0,
    "grace": 0,
    "mary": 0,
  };

  answers.forEach((answer) => {
    if (answer) {
      for (let key in count) {
        if (answer.includes(key)) {
          count[key]++;
        }
      }
    }
  });

  let maxOccurrences = 0;
  let mostOccurredId = null;

  Object.entries(count).forEach(([id, occurrences]) => {
    if (occurrences > maxOccurrences) {
      maxOccurrences = occurrences;
      mostOccurredId = id;
    }
  });

  return mostOccurredId;
}

export default function Results() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const storedAnswers = getAnswers();
    setAnswers(storedAnswers);
  }, []);

  const result = computeResults(answers);
  const name = nameMapping[result] || '';
  const image = imageMapping[result] || '';
  const desc = descMapping[result] || ['', '', ''];

  return (
    <div className={styles.box}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
      />
      <p><strong>{desc[0]}</strong><br/></p>
      <p>{desc[1]}<br/></p>
      <p>{desc[2]}<br/></p>
      <AgainButton />
    </div>
  );
}