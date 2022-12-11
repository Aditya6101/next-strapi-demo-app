import React from "react";
import style from "../styles/Home.module.css";
import Link from "next/link";

function UploadForum() {
  return (
    <div className={style.uploadpage}>
      <div className={style.topcont}>
        <h1>Ask a question</h1>
        <Link href="/">
          <button>Forum</button>
        </Link>
      </div>
      <div className={style.formcont}>
        <form className={style.uploadform}>
          <input type="text" placeholder="Enter your title" maxLength={74} />
          <textarea placeholder="Enter your description" rows={8} />
          <button>Submit Question</button>
        </form>
      </div>
    </div>
  );
}
export default UploadForum;
