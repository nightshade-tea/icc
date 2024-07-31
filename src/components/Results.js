'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "@/styles/results.module.css";

/* rn answers are in order, but we can make a mapping later and randomize their order */

const PlayAgain = () => {
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

export default function Results() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const storedAnswers = [];
    for (let i = 1; i <= 10; i++) {
      const optionId = localStorage.getItem(`question${i}`);
      storedAnswers.push(parseInt(optionId));
    }
    setAnswers(storedAnswers);
  }, []);

  return (
    <div className={styles.box}>
      <h2>Resultado:</h2>
      <pre className={styles.code}>
        {JSON.stringify(answers, null, 2)}
      </pre>
      <PlayAgain />
    </div>
  );
}