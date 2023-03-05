import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ value });
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={clickHandler}>CLick</button>
      <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}>
        1
      </div>
      <div
        onDragOver={dragWithPreventHandler}
        onDragLeave={leaveHandler}
        onDrop={dropHandler}
        style={{ width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15 }}
      >
        2
      </div>
    </div>
  );
};

export default EventsExample;
