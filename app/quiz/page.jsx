"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { data } from "@/data";

export default function Quiz() {
  const [index, setIndex] = useState(3);
  const [question, setQuestion] = useState(data[index])

  

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Quiz time</h1>
      <div className={styles.card}>
        <h1 className={styles.cardTitle}>Question {index +1}</h1>

        <div className={styles.question}>
          <h2 className={styles.questionTitle}>
            
          {index +1}. 
            <span>{question.question}</span>
          </h2>
          <ul className={styles.ul}>
            <li className={styles.li}>{question.choice1}</li>
            <li className={styles.li}>{question.choice2}</li>
            <li className={styles.li}>{question.choice3}</li>
            <li className={styles.li}>{question.choice4}</li>
            
          </ul>
        </div>
        <p className={styles.qNumber}>
          1 <span>/5</span>
        </p>
      </div>
    </div>
  );
}
