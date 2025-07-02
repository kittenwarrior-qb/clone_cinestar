import axios from "axios";
import { MovieType } from "@/types/movie";

const API_URL = "http://localhost:5050/api/movie"; 

export const createMovie = async (movie: Partial<MovieType>) => {
  const res = await axios.post(`${API_URL}`, movie);
  return res.data;
};