import React from 'react';
import './TodoBtns.css';

const TodoBtns = (props) => {
    return (
        <div className="btn-container">
            <button className="btn" onClick={props.addTask}>ADD</button>
            <button className="btn" onClick={props.removeLastTask}>REMOVE</button>
            <button className="btn" onClick={props.clearAllTask}>CLEAR</button>
        </div>

    )
}

export default TodoBtns;