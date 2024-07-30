// UpdateTodoModal.jsx

import { useState } from 'react';

function UpdateTodoModal({ id, currentTitle, onUpdate, onClose }) {
  const [newTitle, setNewTitle] = useState(currentTitle);

  function handleSubmit(e) {
    e.preventDefault();
    if (newTitle.trim() === "") {
      console.error('Title cannot be empty');
      return;
    }
    onUpdate(id, newTitle);
    onClose();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Update Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateTodoModal;
