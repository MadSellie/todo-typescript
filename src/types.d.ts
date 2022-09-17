type AddTodo = (todo: Todo) => void;
type RemoveTodo = (id: Todo) => void;
type UpdateTodo = (todoEdit: Todo, newValue: Todo) => void;
type ToggleComplete = (todo: Todo) => void;

type Todo = {
    text: string;
    isComplete: boolean;
    id: number
};