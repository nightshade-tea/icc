import styles from "@/styles/page.module.css";

export default function Index() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Qual pioneira da computação mais combina com você?
      </h1>
      <div>
        <p className={styles.text}>
          Preparado para descobrir qual mulher incrível da história da tecnologia você seria?<br/>
          Desde Ada Lovelace, a primeira programadora, até as "computadoras" da NASA que levaram o homem à Lua, as mulheres têm revolucionado o mundo da computação.<br />
          Vamos celebrar essas mentes brilhantes e ver com qual dessas pioneiras você mais se identifica! 💡🚀
        </p>
      </div>
      <div className={styles.grid}>
       <a
          href="./question/1"
          className={styles.card}
        >
          <h2>
            Descubra qual computeira você é <span>🌟👩‍💻-&gt;</span>
          </h2>

          <p>Pronto para começar? Vamos lá! 🎉🖥️</p>
        </a>
      </div>
   </main>
  );
}
