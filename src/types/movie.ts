export interface MovieType {
  _id?: string;
  title: string;
  description?: string;
  duration?: number;
  rating?: number;
  trailerUrl?: string;
  posterUrl?: string;
  genres?: string[];
  directors?: string[];
  actors?: string[];
  country?: string;
  lang: "Phụ đề" | "Lồng tiếng" | "Việt Nam";
  isHot?: boolean;
  releaseDate: string;
  startDate: string;
  endDate: string;
  slug?: string;
  isHidden?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
