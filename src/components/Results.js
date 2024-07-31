'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/results.module.css";
import { nameMapping, imageMapping } from "@/data/mappings";

const AgainButton = () => {
  const router = useRouter();

  const handleClick = () => {
    for (let i = 1; i <= 10; i++) {
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

  for (let i = 1; i <= 10; i++) {
    const optionId = parseInt(localStorage.getItem(`question${i}`));

    if (!isNaN(optionId)) {
      storedAnswers.push(parseInt(optionId));
    }
  }

  return storedAnswers;
}

function computeResults(answers) {
  const count = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 1
  };

  answers.forEach((answer) => {
    count[answer]++;
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
  const name = nameMapping[result];
  const image = imageMapping[result];

  return (
    <div className={styles.box}>
      <h2>Resultado:</h2>
      <p>{name}</p>
      <img
        src={image}
        alt={name}
        width={300}
      />
      <AgainButton />
    </div>
  );
}