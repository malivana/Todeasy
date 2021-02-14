import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import {v4 as uuid} from 'uuid';

import {TaskPage, TodoPage, NotFound} from "../Pages/";
import Header from '../Header/Header';

import Modal from '../Modal/Modal';

import './App.sass';

const initialTodos = [
    { 
        id: 'dfldf34sdasd-dfj$#2-kl3434-34klfdkl343443', 
        label: 'Buy brain cells', 
        filter: 'shopping', 
        date: '14 October - 03:34PM', 
        backgroundColor: 'linear-gradient(315deg, rgba(254,50,85,1) 0%, rgba(254,151,92,1) 100%)'
    }, 
    { 
        id: 'dfldfklk34343ldflkl3434-34klfdklhg65653', 
        label: 'Learn Backend in one day', 
        filter: 'study', 
        date: '29 March - 12:00AM', 
        backgroundColor: 'linear-gradient(315deg, rgba(254,50,85,1) 0%, rgba(254,151,92,1) 100%)'
    }, 
    { 
        id: 'dfl67gflkl3434-34klfdklasdsa', 
        label: 'Write mindblowing script', 
        filter: 'work', 
        date: '6 May - 04:20AM', 
        backgroundColor: 'linear-gradient(315deg, rgb(139, 68, 253) 0%, rgb(39, 231, 242) 100%)' 
    }, 
    { 
        id: 'dfldfklascxvflkl3434-34klfdkl-3434', 
        label: 'Write one row of code for this app', 
        filter: 'plans', 
        date: '11 February - 11:30PM', 
        backgroundColor: 'linear-gradient(315deg, rgb(254, 48, 87) 0%, rgb(216, 82, 213) 100%)'
    }, 
    { 
        id: 'dfldfklsaflkl3434-34klfdklcvccv', 
        label: 'Run 1 hour', 
        filter: 'sport', 
        date: '15 March - 07:30AM', 
        backgroundColor: 'linear-gradient(315deg, rgb(28, 78, 253) 0%, rgb(32, 228, 254) 100%)'
    },
    { 
        id: 'dfldfklsaflkl$#-3434-34klfdklcvccv', 
        label: 'Jump once', 
        filter: 'sport', 
        date: '15 March - 08:30AM', 
        backgroundColor: 'linear-gradient(315deg, rgb(28, 78, 253) 0%, rgb(32, 228, 254) 100%)'
    },
    {
        id: 'dfldfklsaflkl$#-3434-34klfdklcvccv', 
        label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem commodi sint omnis eaque molestias sapiente animi, eligendi illo sunt nulla, excepturi doloremque quo possimus necessitatibus voluptas tenetur? Repudiandae doloribus iste possimus libero dicta. Nulla quia animi atque, at quisquam provident inventore ea doloremque dolorem eum cupiditate praesentium, consequatur cum molestias.', 
        filter: 'other', 
        date: '15 March - 08:30AM', 
        backgroundColor: 'linear-gradient(315deg, rgb(28, 78, 253) 0%, rgb(32, 228, 254) 100%)'
    }
]

export default class App extends Component {
    state = {
        taskData: [
            {
                id: '4545asdklklsdlk-fgfkl3434',
                ico: <i className="fa fa-briefcase"></i>,
                label: 'Work',
                filter: 'work',
                backgroundColor: 'linear-gradient(315deg, rgba(254,50,85,1) 0%, rgba(254,151,92,1) 100%)'
            },
            {
                id: 'oaskdf-klsd-34dsi-34k',
                ico: <i className="fa fa-bath"></i>,
                label: 'Rest',
                filter: 'rest',
                backgroundColor: 'linear-gradient(315deg, rgba(254,151,92,1) 0%, rgba(254,50,85,1) 100%)'
            },
            {
                id: 'fgklgfklg0045-df-df-dfad',
                ico: <i className="fa fa-credit-card"></i>,
                label: 'Shopping',
                filter: 'shopping',
                backgroundColor: 'linear-gradient(315deg, rgb(254, 48, 87) 0%, rgb(216, 82, 213) 100%)'
            },
            {
                id: 'fgfgfgfgkl-fgklk454',
                ico: <i className="fa fa-book"></i>,
                label: 'Study',
                filter: 'study',
                backgroundColor: 'linear-gradient(315deg, rgb(139, 68, 253) 0%, rgb(39, 231, 242) 100%)'
            },
            {
                id: '4545jklfdjkiore-irioti4o',
                ico: <i className="fa fa-calendar"></i>,
                label: 'Plans',
                filter: 'plans',
                backgroundColor: 'linear-gradient(315deg, rgb(28, 78, 253) 0%, rgb(32, 228, 254) 100%)'
            },
            {
                id: 'fgfgfgfgkl-fgklk454dffdd-348348',
                ico: <i className="fa fa-heartbeat"></i>,
                label: 'Sport',
                filter: 'sport',
                backgroundColor: 'linear-gradient(315deg, rgb(114, 15, 212) 0%, rgb(215, 102, 255) 100%)'
            },
            {
                id: 'fdkerero-34kre-sd',
                ico: <i className="fa fa-umbrella"></i>,
                label: 'Other',
                filter: 'other',
                backgroundColor: 'linear-gradient(315deg, rgb(254, 48, 87) 0%, rgb(216, 82, 213) 100%)'
            }            
        ],
        todoData: [],
        colors: [
            'linear-gradient(315deg, rgba(254,50,85,1) 0%, rgba(254,151,92,1) 100%)', // Orange
            'linear-gradient(315deg, rgb(254, 48, 87) 0%, rgb(216, 82, 213) 100%)', // Pink
            'linear-gradient(315deg, rgb(114, 15, 212) 0%, rgb(215, 102, 255) 100%)', // Purple
            'linear-gradient(315deg, rgb(28, 78, 253) 0%, rgb(32, 228, 254) 100%)', // Blue
            'linear-gradient(315deg, rgb(139, 68, 253) 0%, rgb(39, 231, 242) 100%)' // Purple Blue
        ],

        notifyModalText: '',
        isNotifyModal: false,
        isTodoMenu: false,
        
        todosValueTotal: 0,
        todosValueCompleted: 0
    };

    firstInit = (dayOfInit) => {
        localStorage.setItem('initDay', dayOfInit);

        console.log('Whoa, first time here? Make yourself comfortable :)');
        
        this.setState(() => {
            localStorage.setItem('todos', JSON.stringify(initialTodos));
            localStorage.setItem('todosValueTotal', initialTodos.length);
            localStorage.setItem('todosValueCompleted', 0);

            return {
                todoData: initialTodos,
                todosValueTotal: initialTodos.length,
                todosValueCompleted: 0,
                isNotifyModal: true,
                notifyModalText: 
                    <>
                        <p>
                            Hey, first time here? Make yourself comfortable.
                        </p>
                        <p>
                            Every day your tasks are reset and the results of completed tasks are announced. 
                            Now let me load prepared plans to see how it's works. Results we'll see tomorrow :)
                        </p>
                    </>
            }
        });
    }

    componentDidMount() {
        let initDay;
        const todayDate = new Date().getTime();
        const todayDay  = parseInt(todayDate / (1000 * 60 * 60 * 24));

        if (localStorage.getItem('initDay')) {
            // Day when app was last initted
            initDay = +localStorage.getItem('initDay');
        }
        else {
            // First init of the app, set default preset of todos
            initDay = todayDay;

            this.firstInit(todayDay);

            return;
        }


        // Check for next day
        if (initDay < todayDay) {
            const todosTotal      = +localStorage.getItem('todosValueTotal'),
                  todosCompleted  = +localStorage.getItem('todosValueCompleted'),
                  completedColors = {
                    perfect:  'green',
                    good:     'yellow',
                    bad:      'red' 
                  };

            let completedPercent = Math.floor(todosCompleted / todosTotal * 100),
                completedPhrase,
                completedColor;

            // Checking for this because 0 / 0 === NaN 
            if (isNaN(completedPercent)) {
                completedPercent = 0;
            }                                                  

            if (completedPercent === 100) {
                completedPhrase = `
                    Amazing! You have coped with all the tasks set.
                    Continue in the same spirit and do not stop there. We believe in you!
                `;
                completedColor = completedColors.perfect;
            }
            else if (completedPercent >= 75) {
                completedPhrase = `
                    Awesome! You did a good job completing yesterday's plans.
                    A little more and the peaks will be at your feet!
                `;
                completedColor = completedColors.perfect;
            }   
            else if (completedPercent >= 50) {
                completedPhrase = `
                    Achieving your goals isn't always easy, but that's no reason to stop. 
                    Never say "I give up"
                    Always say, "I can. And I'll keep trying until I win."
                    (c) Unknown sage
                `;
                completedColor = completedColors.good;
            }   
            else if (completedPercent >= 25) {
                completedPhrase = `
                    The only brake on the way to our tomorrow
                    achievements are our doubts of today's
                    (c) Franklin Roosevelt
                `;
                completedColor = completedColors.bad;
            }
            else if (completedPercent >= 0) {
                completedPhrase = `
                    There must be pauses in life.
                    Such pauses when nothing happens to you,
                    when you just sit and look at the World, and the World looks at you.
                    (c) Karl Renz
                `;
                completedColor = completedColors.bad;
            }    

            localStorage.setItem('initDay', todayDay);

            this.setState({
                isNotifyModal: true,
                notifyModalText: 
                    <>
                        <p>
                            Yesterday you completed <span style={{color: completedColor}}>{completedPercent}%</span> of you plans.
                        </p>

                        <p>
                            {completedPhrase}
                        </p>                    
                    </>
            })

            this.clearTodoData();            
        }

        // Check for prev day
        if (todayDay < initDay) {
            localStorage.setItem('initDay', todayDay);

            this.setState({
                isNotifyModal: true,
                notifyModalText: 'Could you share you time machine with us?'}
            );

            this.clearTodoData();
        }

        console.log('Loading your todos...');

        // If initDay === todayDay 
        const todos = JSON.parse(localStorage.getItem('todos'))
            ? JSON.parse(localStorage.getItem('todos')) 
            : []
        ;

        const todosValueTotal     = +localStorage.getItem('todosValueTotal');
        const todosValueCompleted = +localStorage.getItem('todosValueCompleted');

        this.setState({
            todoData: todos,
            todosValueTotal,
            todosValueCompleted
        })

        /* 
            Get the current day, throw numbers after dot (129.34 -> 129) - output is string.
            This is fine, because the next step it's going to the local storage.
            P.S local storage means only string will be saved there
        */
    }

    clearTodoData = () => {
        localStorage.setItem('todos', '[]'); // Empty array in `[]` because of JSON format
        localStorage.setItem('todosValueCompleted', 0);
        localStorage.setItem('todosValueTotal', 0);

        this.setState({
            todoData: [],
            todosValueCompleted: 0,
            todosValueTotal: 0
        })
    }

    filterItems(arr, filter, itemField = 'filter') {
        return arr.filter(item => item[itemField] === filter)
    }

    addTodo = (label, filter, backgroundColor) => {
        const dateNow = new Date();
        const month = dateNow.getMonth();

        const displayDay   = dateNow.getDate();
        const displayMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const displayTime  = dateNow.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        })

        const todoDate = `
            ${displayDay} ${displayMonth[month]} - ${displayTime}
        `;

        this.setState(({todoData, todosValueTotal}) => {
            const newTodo = {
                id: uuid(),
                label,
                filter,
                backgroundColor,
                date: todoDate
            }
            
            const newArr = [...todoData, newTodo];

            localStorage.setItem('todos', JSON.stringify(newArr));
            localStorage.setItem('todosValueTotal', todosValueTotal + 1);

            return {
                todoData: newArr,
                todosValueTotal: todosValueTotal + 1
            }
        })
    }

    onComplete = (id) => {    
        this.setState( ({todoData, todosValueCompleted}) => {
            const index = todoData.findIndex(item => item.id === id);

            let newArr;
            
            if (!index === 0) {
                newArr = [...todoData.slice(index + 1)]; // Slice from second elemnt of array to last one
            }
            else {
                newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
            }
            
            localStorage.setItem('todos', JSON.stringify(newArr));
            localStorage.setItem('todosValueCompleted', todosValueCompleted + 1);
            
            return {
                todoData: newArr,
                todosValueCompleted: todosValueCompleted + 1
            }
        })
    }

    onOpenModal = (modalNameInState) => {
        if (!this.state[modalNameInState]) {
            const newModalState = {};
            newModalState[modalNameInState] = true;

            document.body.style.overflow = 'hidden';
            
            this.setState({
                isNotifyModal: false,
                isTodoMenu: false,
                ...newModalState
            })
        }
    }

    onCloseModal = (modalNameInState) => {
        if (this.state[modalNameInState]) {
            const newModalState = {};
            newModalState[modalNameInState] = false;
            
            document.body.style.overflow = '';
            
            this.setState({
                isNotifyModal: false,
                isTodoMenu: false,
                ...newModalState
            })
        }
    }

    render() {
        const { 
            taskData,
            todoData,
            colors, 

            todosValueTotal, 
            todosValueCompleted,
            
            isNotifyModal,
            notifyModalText,
            isTodoMenu 
        } = this.state;
  
        
        let classes = "app ";

        if (isNotifyModal || isTodoMenu) {
            classes += "app_modal-active "
        }

        // Headers should be in spliced folder but I'm bored for today
        return (
            <div className={classes}>     
                <Modal 
                    isOpen={isNotifyModal}
                    onCloseModal={() => this.onCloseModal('isNotifyModal')}
                >
                    {notifyModalText}
                </Modal>     
                
                <Switch>
                    <Route path="/" exact render={
                        () => {
                            return (
                                <>
                                    <Header 
                                        todosValueTotal={todosValueTotal}
                                        todosValueCompleted={todosValueCompleted}

                                        backward={false}
                                    />

                                    <TaskPage
                                        taskData={taskData} 
                                        todoData={todoData} 
                                        todosValueCompleted={todosValueCompleted}
                                        filterItems={this.filterItems}
                                    />
                                </>
                            )
                        }}
                    />

                    <Route 
                        path="/:filter"
                        render={
                            ({match}) => {
                                const {filter} = match.params;

                                return (
                                    <>                                      
                                        <TodoPage                                             
                                            taskData={taskData}
                                            todoData={todoData}
                                            filter={filter}
                                            isTodoMenu={isTodoMenu}
                                            colors={colors}
                                            // It would be better with Redux

                                            todosValueTotal={todosValueTotal}
                                            todosValueCompleted={todosValueCompleted}
                                            // For Header

                                            filterItems={this.filterItems}
                                            onSubmit={this.addTodo}
                                            onComplete={this.onComplete}

                                            onCloseModal={() => this.onCloseModal('isTodoMenu')}
                                            onOpenModal={() => this.onOpenModal('isTodoMenu')}
                                        />                                             
                                    </>       
                                )
                            }
                        }
                    />

                    <Route component={NotFound}/>
                </Switch>
            </div>
        )   
    }
}