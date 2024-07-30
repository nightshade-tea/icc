import styles from "@/styles/index.module.css";

export default function Index() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a
          href="./question/1"
          className={styles.card}
        >
          <h2>
            Iniciar quiz <span>-&gt;</span>
          </h2>
          <p>lalala lelele descrição</p>
        </a>
      </div>
    </main>
  );
}
