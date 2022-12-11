import axios from "axios";
import type { Question } from "./../../type.d";

const url = "http://localhost:1337/api/strapi-forums";
export const readForum = () => axios.get(url).then((res) => res.data);
export const createQuestion = (newQuestion: Question) =>
  axios.post(url, newQuestion);
