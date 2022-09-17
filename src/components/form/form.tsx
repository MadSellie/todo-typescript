import React, {useState, useRef, Fragment, FC, ChangeEvent, FormEvent} from 'react';
import {Grid, Input} from '@mui/material';
import './form.css';

interface EditProps {
    edit?: Todo;
    onSubmit: AddTodo;
}

const Form: FC<EditProps> = ({ edit, onSubmit }) => {
    const [input, setInput] = useState<string>(edit ? edit.text : '');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isComplete: false
        });

        setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {edit ? (
                <Fragment>
                    <Grid>
                        <Input
                            defaultValue=""
                            sx={{
                                margin: '8px',
                                color: 'white',
                                width: '270px',
                            }}
                            placeholder="Изменить задание"
                            value={input}
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button edit">Изменить</button>
                    </Grid>
                </Fragment>
            ) : (
                <Fragment>
                    <Grid>
                        <Input
                            defaultValue=""
                            sx={{
                                margin: '8px',
                                color: '#fff',
                                width: '270px',
                            }}
                            placeholder="Добавить задание"
                            value={input}
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className="todo-button">Добавить</button>
                    </Grid>
                </Fragment>
            )}
        </form>
    );
};

export default Form;
