import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from '../../Header/Header';
import AddButton from '../../AddButton/AddButton';
import AddTodoMenu from '../../AddTodoMenu/AddTodoMenu';
import Todo from '../../Todo/Todo';
import NotFound from "../NotFound/NotFound";

class TodoPage extends Component {
    render() {
        const {
            isTodoMenu,
            todoData, taskData, colors, 
            filterItems, filter, 
            onComplete, onSubmit, 
            onCloseModal, onOpenModal,
            todosValueTotal, todosValueCompleted
        } = this.props;

        const currentTaskTodos = filterItems(todoData, filter);
        const taskIsExist = taskData.find(item => item.filter === filter);

        if (!taskIsExist) {
            return <NotFound/>
        }
        
        const animationClasses = {            
            enter: 'todo-enter',
            exit: 'todo-exit'        
        }

        return (
            <>
                <Header 
                    todosValueTotal={todosValueTotal}
                    todosValueCompleted={todosValueCompleted} 
                />

                <TransitionGroup 
                    component='ul'
                    className="todo-list"
                >
                    {
                        currentTaskTodos.map(todo =>                   
                            <CSSTransition
                                timeout={300}
                                classNames={animationClasses}
                                key={todo.id}
                            >
                                <Todo 
                                    item={todo}                            
                                    onComplete={onComplete}
                                    todoIco={taskIsExist.ico}
                                />
                            </CSSTransition>      
                        )
                    }
                </TransitionGroup>                

                <AddButton onOpenModal={onOpenModal}/>                
                <AddTodoMenu 
                    isOpen={isTodoMenu}
                    onSubmit={onSubmit} 
                    filter={filter} 
                    colors={colors}
                    onCloseModal={onCloseModal}
                /> 
            </>
        )
    }
}

export default TodoPage;