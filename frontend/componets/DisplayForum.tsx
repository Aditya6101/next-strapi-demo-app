import React, { FC, useState } from "react";
import style from "../styles/Home.module.css";
import Link from "next/link";
import { dataAttr } from "../type";

function DisplayForum({ response }: { response: dataAttr[] }) {
  const [show, setShow] = useState(false);
  console.log({ response });

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
      {response.map((response, index) => (
        <div key={index}>
          <div className={style.userinfo}>
            <p>Posted By: {response.attributes.username}</p>
          </div>
          <div className={style.questioncont}>
            <p className={style.question}>{response.attributes.questions}</p>
          </div>
          <div className={style.answercont}>
            <h2 className={style.subheading}>Answers</h2>
            <div className={style.inputanswer}>
              <form>
                <textarea placeholder="Enter your answer" rows={5} />
                <button>Post</button>
              </form>
            </div>
            <button className={style.showanswer} onClick={() => setShow(!show)}>
              {show ? "Hide Answers" : "Show Answers"}
            </button>
            {show ? (
              <div className={style.answers}>
                <div className={style.eachanswer}>
                  <p className={style.username}>
                    {response.attributes.answername}
                  </p>
                  <p className={style.answertext}>
                    {response.attributes.answers}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
export default DisplayForum;
