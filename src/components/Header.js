import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.description}>
        <p>
          Os&nbsp;
          <code className={styles.code}>Investidos</code>
        </p>
      </div>
    </header>
  );
}
