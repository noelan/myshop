import Axios from "axios";
import { ARTICLE_API } from "../config";

// let request = `http://localhost:8000/api/articles?category=${category}`;

async function findByCategory(category) {
  return Axios.get(`${ARTICLE_API}?category=${category}`).then(
    (response) => response.data["hydra:member"]
  );
}

async function findByCategoryAndType(category, type) {
  return Axios.get(`${ARTICLE_API}?category=${category}&type=${type}`).then(
    (response) => response.data["hydra:member"]
  );
}

async function findById(id) {
  return Axios.get(`${ARTICLE_API}/${id}`).then((response) => response.data);
}

export default {
  findByCategory,
  findById,
  findByCategoryAndType,
};
