import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

      <h1 className={styles.h1}>Investor Profile Survey: Understanding Your Investment Preferences</h1>
      <Link href="/quiz">
      <button className={styles.button}>
        Start Quiz
      </button>
      </Link>
      </div>
    </main>
  );
}
