import React from "react";
import styles from "./Languages.module.css";

const Languages = () => {
  const arr = [
    {
      id: 1,
      title: "Arabic",
      letter: "A",
    },
    {
      id: 2,
      title: "Azerbaijani",
      letter: "",
    },
    {
      id: 3,
      title: "Chinese (Traditional)",
      letter: "C",
    },
    {
      id: 4,
      title: "Czech",
      letter: "",
    },
    {
      id: 5,
      title: "English",
      letter: "E",
    },
    {
      id: 6,
      title: "German",
      letter: "G",
    },
    {
      id: 7,
      title: "Hindi",
      letter: "H",
    },
    {
      id: 8,
      title: "Irish",
      letter: "I",
    },
    {
      id: 9,
      title: "Italian",
      letter: "I",
    },
    {
      id: 10,
      title: "Indian",
      letter: "I",
    },
    {
      id: 11,
      title: "Kazakh",
      letter: "K",
    },
    {
      id: 12,
      title: "Korean",
      letter: "K",
    },
    {
      id: 13,
      title: "Kyrgyz",
      letter: "K",
    },
    {
      id: 14,
      title: "Mongolian",
      letter: "M",
    },
    {
      id: 15,
      title: "Japanese",
      letter: "J",
    },
    {
      id: 16,
      title: "Spanish",
      letter: "S",
    },
    {
      id: 17,
      title: "Norwegian",
      letter: "N",
    },
    {
      id: 18,
      title: "Uzbek",
      letter: "U",
    },
    {
      id: 19,
      title: "Urdu",
      letter: "U",
    },
    {
      id: 20,
      title: "Russian",
      letter: "R",
    },
    {
      id: 21,
      title: "French",
      letter: "F",
    },
    // {
    //   id: 22,
    //   title: "Vietnamese",
    //   letter: "V",
    // },
  ];
  return (
    <div className={styles.languages}>
      <div className="container">
        <h4 className="standartTitle">Languages</h4>
        <div className={styles.languages__inner}>
          {arr.map((item) => (
            <div key={item.id}>
              <p>{item.letter}</p>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="lineBlock"></div>
        <button className="standartBtn">Start Translation</button>
      </div>
    </div>
  );
};

export default Languages;
