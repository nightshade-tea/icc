import Question from "@/components/Question";
import styles from "@/styles/page.module.css";
import questions from "@/data/questions.json";

export function generateStaticParams() {
  return Array.from({ length: questions.length }, (_, i) => ({
    id: String(i + 1),
  }));
}

export default function QuestionPage({ params }) {
  const id = Number(params.id);

  if (!Number.isInteger(id) || id < 1 || id > questions.length) {
    return notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Question id={id} />
      </div>
    </main>
  );
}