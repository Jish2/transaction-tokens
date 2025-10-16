import { Outfit } from "./types";

export const determineOutfit = (weather: number): Outfit => {
  if (weather < 50) {
    return "heavy coat";
  }
  if (weather < 70) {
    return "light jacket";
  }

  return "shorts";
};
