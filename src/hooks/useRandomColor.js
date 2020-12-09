import { useEffect, useState } from "react";

function getRandomColor(min, max) {
  const rcolor = Math.floor(Math.random() * (max - min) + min);
  return '#' + rcolor.toString(16);
}
export default function useRandomColor() {

  const [color, setColor] = useState('deeppink');
  useEffect(() => {
    const colorInt = setInterval(() => {
      setColor(getRandomColor(16000000, 30000))
    }, 1000);
    return () => {
      clearInterval(colorInt)
    }
  }, [color])

  return {color};
}