import React, {useRef} from 'react'
import './NewTodo.css';

// typically you would go for interface just for sake of demo


type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);

    };


    return <form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
            <label htmlFor="todo-text">TODO TEXT</label>
            <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type='submit'>ADD TODO</button>
    </form>
};


export default NewTodo;