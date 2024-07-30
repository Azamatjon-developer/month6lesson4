import { useContext, useRef } from 'react';
import { Context } from '../../Context/Context';
import { Toaster } from 'react-hot-toast';

function TodoForm() {
  const { todos, setTodos } = useContext(Context);

  const inputRef = useRef();

  function handleSubmitForm(e) {
    e.preventDefault();
    const title = inputRef.current.value.trim();
    if (!title) {
      console.error('Title cannot be empty');
      return;
    }

    const todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: title,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
    e.target.reset();
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={handleSubmitForm}
        autoComplete="off"
        className="w-[600px] flex items-center justify-center gap-4 m-8 mx-auto"
      >
        <input
          ref={inputRef}
          className="w-[75%] py-3 pl-2 rounded-md border-[2px] border-blue-600"
          required
          name="todoValue"
          type="text"
          placeholder="Add your todo"
        />
        <button className="bg-blue-500 w-[25%] text-white font-bold px-6 py-2 rounded-lg">
          Add Todo
        </button>
      </form>
    </>
  );
}

export default TodoForm;
