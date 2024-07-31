import Results from "@/components/Results";
import styles from "@/styles/page.module.css";

export default function ResultsPage() {

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Results />
      </div>
    </main>
  );
}