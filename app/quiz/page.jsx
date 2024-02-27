"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { data } from "@/data";
import { GrPowerReset } from "react-icons/gr";
import { useRouter } from "next/navigation";


export default function Quiz() {
    const router = useRouter();
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [allSelectedChoices, setAllSelectedChoices] = useState([]);
  const [final, setFinal] = useState(false)
  

  //handling selected answer
  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
    
  };

  console.log(setAllSelectedChoices)

//function for handling next button
  const handleNext=()=>{
    if (index === data.length - 1) {
        
        if (selectedChoice !== null) {
          setAllSelectedChoices((prevChoices) => [
            ...prevChoices,
            { question: question.question, choice: selectedChoice },
          ]);
        }
        
        setFinal(true);

        router.push("/thankyou")
        return
      }
    
      
      if (selectedChoice !== null) {
        setAllSelectedChoices((prevChoices) => [
          ...prevChoices,
          { question: question.question, choice: selectedChoice },
        ]);
    
      
        setIndex((prevIndex) => prevIndex + 1);
        setSelectedChoice(null);
        setQuestion(data[index + 1]);
      } else {
        console.log("Please select an answer before proceeding.");
      }
    
    
  }
  useEffect(() => {
    console.log("Updated All Selected Choices:", allSelectedChoices);
  }, [allSelectedChoices]); 

  //function for handling next button
  const handleReset=()=>{
    setSelectedChoice(null)
    setAllSelectedChoices([])
    window.location.reload();

  }


  console.log("selectedChoice",selectedChoice);
  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Let us understand you better...</h1>
      <div className={styles.card}>
        {/* <h1 className={styles.cardTitle}>Question {index + 1}</h1> */}

        <div className={styles.question}>
          <h2 className={styles.questionTitle}>
            {index + 1}. <span>{question.question}</span>
          </h2>
          <ul className={styles.ul}>
            <li
              className={`${styles.li} ${
                selectedChoice === question.choice1 ? styles.selected : ""
              }`}
              onClick={() => handleChoiceClick(question.choice1)}
            >
              {question.choice1}
            </li>
            <li
              className={`${styles.li} ${
                selectedChoice === question.choice2 ? styles.selected : ""
              }`}
              onClick={() => handleChoiceClick(question.choice2)}
            >
              {question.choice2}
            </li>
            <li
              className={`${styles.li} ${
                selectedChoice === question.choice3 ? styles.selected : ""
              }`}
              onClick={() => handleChoiceClick(question.choice3)}
            >
              {question.choice3}
            </li>
            <li
              className={`${styles.li} ${
                selectedChoice === question.choice4 ? styles.selected : ""
              }`}
              onClick={() => handleChoiceClick(question.choice4)}
            >
              {question.choice4}
            </li>
            
          </ul>
        </div>
        <div className={styles.end}>
        <p className={styles.qNumber}>
          {index+1} <span>/{data.length}</span>
        </p>
        
        
        <button className={`${styles.nextButton} ${selectedChoice === null ? styles.nextDisabled : ""}`} disabled={selectedChoice===null} onClick={handleNext}>Next</button>
        
        </div>
        <button className={styles.reset} onClick={handleReset}><GrPowerReset /></button>
      </div>
    </div>
  );
}
