import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
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
