import { FormEvent, useState } from "react";
import { createQuestion } from "../pages/api";
import style from "../styles/Home.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

function UploadForum() {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newQuestion = {
      title: name,
      questions: description,
      answers: [""],
      username: session?.user?.name,
    };
    createQuestion(newQuestion);
  }
  return (
    <div className={style.uploadpage}>
      <div className={style.topcont}>
        <h1>Ask a question</h1>
        <Link href="/">
          <button>Forum</button>
        </Link>
      </div>
      <div className={style.formcont}>
        <form className={style.uploadform} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your title"
            maxLength={74}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Enter your description"
            rows={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Submit Question</button>
        </form>
      </div>
    </div>
  );
}
export default UploadForum;
