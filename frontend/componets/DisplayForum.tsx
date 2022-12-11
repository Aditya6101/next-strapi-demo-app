import React, { FC, useState } from "react";
import style from "../styles/Home.module.css";
import Link from "next/link";
import { dataAttr } from "../type";
import axios from "axios";

function DisplayForum({ response }: { response: dataAttr[] }) {
  const [show, setShow] = useState(false);

  const [answer, setAnswer] = useState("");
  const [id, setId] = useState<number>();
  const [a, formerArray] = useState<string[]>([]);

  function submitAnswer(Id: number) {
    let obj = response.find((res) => res.id === Id);
    let reqBody = {
      ...obj,
      attributes: {
        ...obj?.attributes,
        answers: [...a, answer],
      },
    };
    console.log({ reqBody });

    if (!obj) {
      return alert("Something went wrong");
    }
    try {
      axios.put(`http://localhost:1337/api/strapi-forums/${Id}`, {
        data: { answers: [...obj.attributes.answers, answer] },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className={style.topcont}>
        <h1 className={style.heading}>Display forum</h1>
        <div>
          <Link href="/upload">
            <button>Ask a question</button>
          </Link>
          <button>Login</button>
        </div>
      </div>
      <h2 className={style.subheading}>Questions</h2>
      {response.map((res, index) => (
        <div key={index}>
          <div className={style.userinfo}>
            <p>Posted By: {res.attributes.username}</p>
          </div>
          <div className={style.questioncont}>
            <p className={style.question}>{res.attributes.questions}</p>
          </div>
          <div className={style.answercont}>
            <h2 className={style.subheading}>Answers</h2>
            <div className={style.inputanswer}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setId(res.id);
                  submitAnswer(res.id);
                }}
              >
                <textarea
                  placeholder="Enter your answer"
                  rows={5}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <button>Post</button>
              </form>
            </div>
            <button className={style.showanswer} onClick={() => setShow(!show)}>
              {show ? "Hide Answers" : "Show Answers"}
            </button>
            {show ? (
              <div className={style.answers}>
                {res.attributes.answers.map((answers, i) => (
                  <div className={style.eachanswer} key={i}>
                    <p className={style.username}>
                      {res.attributes.answername}
                    </p>
                    <p className={style.answertext}>{answers}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
export default DisplayForum;
