/*
import React from "react";

function Task({text,category,onDelete}) {
  return (
    <div>
      <span>{text}</span>
      <span>{category}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
    
    /*
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
    *
  );
}

export default Task;
*



function Task({ id, text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
        className="delete" 
        onClick={() => onDelete(id)}
      >
        X
      </button>
    </div>
  );
}

export default Task;
*


import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(text)}>
        X
      </button>
    </div>
  );
}

export default Task;
*/

function Task({ text, category, onDeleteTask }) {
  const handleClick = () => onDeleteTask(text);

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}
export default Task;



