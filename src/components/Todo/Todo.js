import React, {Component} from 'react';
import { ReactComponent as CompleteIco } from './Complete.svg';

import './Todo.sass';

export default class Todo extends Component {
    state = {
        editing: false
    }

    onToggleEdit = () => {
        const { editing } = this.state;

        this.setState({
            editing: !editing
        });
    }

    render() {
        const { item: {id, label, date, backgroundColor}, todoIco, onComplete} = this.props
        const { editing } = this.state;

        const style = {
            background: backgroundColor
        }

        let classes = 'todo-list__item ';

        if (editing) {
            classes += 'todo-list__item_editing '
        }

        return (
            <li 
                className={classes}
                style={{background: backgroundColor}}
                onClick={this.onToggleEdit}
            >
                <div className="todo-list__ico ico_min">
                    {todoIco}
                </div>

                <div className="todo-list__descr">
                    <h3 className="todo-list__label"> {label} </h3>
                    <div className="todo-list__date"> {date} </div>
                </div>

                <div className="todo-list__interact">
                    <button 
                        style={style}
                        className="btn"
                        onClick={() => {onComplete(id)}}
                    >
                        <CompleteIco/>
                    </button>                        
                </div>
            </li>

        )
    }
}