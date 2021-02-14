import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Task.sass';

export default class Task extends Component {    
    render() {
        const {task: {ico, label, backgroundColor}, todoData} = this.props;

        const filter = label.toLowerCase();

        const currentTodos = todoData.filter(todo => todo.filter === filter);

        return (
            <Link to={`/${filter}`}>
                <li className="task-list__item" style={{
                    background: backgroundColor
                }}>
                    <div className="task-list__ico ico"> {ico} </div>
                    <h2 className="task-list__title"> {label} </h2>
                    <p className="task-list__value">
                        {(currentTodos.length < 10) ? `0${currentTodos.length}` : currentTodos.length} Tasks Available
                    </p>
                </li>             
            </Link>
        )
    }
}