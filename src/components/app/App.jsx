import React from 'react';
import { useRecord } from '../../custom-hooks/useRecord';

export default function App() {
  const { current, undo, redo, record } = useRecord('#FFw0000');

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}