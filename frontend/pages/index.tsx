import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DisplayForum from "../componets/DisplayForum";
import { readForum, createQuestion } from "./api";
import { useEffect, useState } from "react";

export default function Home() {
  const [question, setQuestions] = useState({});
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await readForum();
      setResponse(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <DisplayForum response={response} />
    </div>
  );
}

// export function getStaticProps(){
//   const
// }
