import { useState } from "react";

export const useRotate = () => {
  const [rotate, setRotate] = useState(false);
  const toggleRotate = () => setRotate((prev) => !prev);
  return { rotate, toggleRotate };
};
