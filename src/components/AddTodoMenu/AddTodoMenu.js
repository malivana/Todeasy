import React, {Component} from 'react';

import './AddTodoMenu.sass';

export default class AddTodoMenu extends Component {
    state = {
        color: 'linear-gradient(315deg, rgba(254,50,85,1) 0%, rgba(254,151,92,1) 100%)',
        label: ''
    }

    onSubmit = (e) => {
        const { color, label } = this.state;

        e.preventDefault()

        if (!label) {
            return;
        }

        this.props.onSubmit(label, this.props.filter, color);
        this.props.onCloseModal();

        this.setState({
            label: ''
        })
    }

    onChangeColor = (color) => {
        this.setState({
            color
        })
    }

    onInput = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    render() {
        const {colors, isOpen, onCloseModal} = this.props;

        const inputs = colors.map(color => {    
            const isChecked = this.state.color === color ? true : false;

            return (
                <label 
                    key={`color-${color}`}
                    className="todo-menu__radio radio" 
                    onChange={() => this.onChangeColor(color)} 
                >
                    <input type="radio" name="color" defaultChecked={isChecked}/>
                    <div style={{background: color}}></div>
                </label>
            )
        })

        return (
            <>
                {isOpen ? 
                    (
                        <div className="todo-menu">
                            <div className="todo-menu__wrapper">
                                <div className="todo-menu__dialog">
                                    <div className="todo-menu__close ico btn" onClick={onCloseModal}>&#10006;</div>
                                    <form onSubmit={this.onSubmit}>
                                        <textarea 
                                            onInput={this.onInput} 
                                            placeholder="Create New Task..." 
                                            type="text" 
                                            name="label" 
                                            className="todo-menu__input-text"
                                        />
                        
                                        <h3 className="todo-menu__field-title">Pick a Color</h3>                                        
                                        <div className="todo-menu__radio-items">
                                            {inputs}
                                        </div>

                                        <button className="todo-menu__btn btn btn_back" type="submit">Create New task</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )

                    : null
                }
            </>
        )
    }
}