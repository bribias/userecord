import { useEffect, useState } from 'react';

export const useRecord = (initialColor) => {
  const [current, setCurrent] = useState(initialColor);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([]);

  const record = (value) => {
    const index = currentIndex + 1;
      const historyArr = history.slice();
      historyArr.splice(index, 0, value);
      setCurrentIndex(index);
      setCurrent(value);
      setHistory(historyArr);
  };
    
    const undo = () => {
        if (currentIndex > 0) {
            const target = history[currentIndex - 1];
            setCurrent(target);
            setCurrentIndex(currentIndex - 1);
      }
    };
    
    const redo = () => {
        const historyArr = history.slice();
        if (currentIndex < (historyArr.length - 1)) {
            const target = history[currentIndex + 1];
            setCurrent(target);
            setCurrentIndex(currentIndex + 1);
        }
  };

  return { current, undo, redo, record };
};
