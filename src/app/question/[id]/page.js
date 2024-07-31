import Question from "@/components/Question";
import styles from "@/styles/page.module.css";

export function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({
    id: String(i + 1),
  }));
}

export default function QuestionPage({ params }) {
  const id = Number(params.id);

  if (!Number.isInteger(id) || id < 1 || id > 10) {
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