import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useRecord = (initialColor) => {
    const [current, setCurrent] = useState(initialColor);
    const [history, setHistory] = useState([]);

    const record = (newColor) => { };
    const undo = () => { };
    const redo = () => { };

    useEffect(() => {
        history.push(current);
    }, []);

    return { current, undo, redo, record };
};