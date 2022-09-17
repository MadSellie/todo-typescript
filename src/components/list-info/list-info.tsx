import React, {useState, FC} from 'react';
import Form from '../form/form';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import {AiOutlineCheckSquare} from 'react-icons/ai';
import './list-info.css';

interface ToDoProps {
    todos: Array<Todo> | any;
    completeTodo: ToggleComplete | any;
    removeTodo: RemoveTodo | any;
    updateTodo: UpdateTodo | any;
}

const Todo: FC<ToDoProps> = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState<Todo | null>();

    const submitUpdate = (value: Todo) => {
        updateTodo(edit, value);
        setEdit(null);
    };

    if (edit) {
        return <Form edit={edit} onSubmit={submitUpdate} />;
    }

    return (
        <TransitionGroup>
            {todos.map((todo: Todo, index: number) => (
                <CSSTransition key={index} timeout={300} classNames="todo-tran">
                    <div
                        className={
                            todo.isComplete ? 'todo-row complete' : 'todo-row'
                        }
                        key={index}
                    >
                        <div className="icons">
                            <AiOutlineCheckSquare
                                style={{ cursor: 'pointer' }}
                                onClick={() => completeTodo(todo)}
                            />
                        </div>
                        <div key={todo.id}>{todo.text}</div>
                        <div className="icons">
                            <RiCloseCircleLine
                                onClick={() => removeTodo(todo)}
                                className="delete-icon"
                            />
                            <TiEdit
                                onClick={() => setEdit(todo)}
                                className="edit-icon"
                            />
                        </div>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default Todo;
