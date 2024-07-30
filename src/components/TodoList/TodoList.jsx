import { useState, useContext } from 'react';
import { Context } from '../../Context/Context';
import UpdateTodoModal from '../TodoUpdate/TodoUpdate';

function TodoList() {
  const { todos, setTodos } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  function handleDeleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }

  function handleUpdateTodo(id, newValue) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, title: newValue } : item
      )
    );
  }

  function handleCompleteTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  function openUpdateModal(todo) {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  }

  function closeUpdateModal() {
    setIsModalOpen(false);
  }

  if (!todos) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isModalOpen && currentTodo && (
        <UpdateTodoModal
          id={currentTodo.id}
          currentTitle={currentTodo.title}
          onUpdate={handleUpdateTodo}
          onClose={closeUpdateModal}
        />
      )}
      <ul className="w-[600px] mx-auto mt-5 flex flex-col gap-5">
        {todos.map((item, index) => (
          <li
            key={item.id}
            className="bg-blue-300 p-3 rounded-lg flex justify-between"
          >
            <div>
              <span>{index + 1}</span>
              <strong> {item.title} </strong>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDeleteTodo(item.id)}
                className="p-2 rounded-lg bg-red-600 text-white font-bold"
              >
                Delete
              </button>
              <button
                onClick={() => openUpdateModal(item)}
                className="p-2 rounded-lg bg-blue-500 text-white font-bold"
              >
                Update
              </button>
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleCompleteTodo(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
