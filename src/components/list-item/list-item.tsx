import React, {FC, useState} from 'react';
import Form from '../form/form';
import Todo from '../list-info/list-info';
import './list-item.css';

const ListItem: FC = () => {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const addTodo: AddTodo = (todo) => {
        if (!todo || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const removeTodo: RemoveTodo = (id) => {
        const removeArr: Array<Todo> = [...todos].filter(
            (todo) => todo.id !== id.id
        );
        setTodos(removeArr);
    };

    const completeTodo: ToggleComplete = (completedTodo) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === completedTodo.id) {
                todo.isComplete = !todo.isComplete;
            }

            return todo;
        });
        
        setTodos(updatedTodos);
    };

    const updateTodo: UpdateTodo = (todoEdit, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((prev) =>
            prev.map((item) => (item.id === todoEdit.id ? newValue : item))
        );
    };

    return (
        <div>
            <h1>Какие планы?</h1>
            <Form onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
};

export default ListItem;
