import axios from "axios";
import { MovieType } from "@/types/movie";

const API_URL = "http://localhost:5050/api/movie"; 

export const updateMoviePoster = async (id: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.put(`${API_URL}/update-poster/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};