import ResultBox from "@/components/ResultBox";
import styles from "@/styles/index.module.css";

export default function Results() {

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <ResultBox/>
      </div>
    </main>
 );
}