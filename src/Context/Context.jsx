
// import { createContext, useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";

// const Context = createContext();

// function TodoContext({ children }) {
//   const [todos, setTodos] = useState(() => {
//     let initialTodos = [];
//     try {
//       const savedTodos = window.localStorage.getItem("todos");
//       if (savedTodos) {
//         initialTodos = JSON.parse(savedTodos);
//       }
//     } catch (error) {
//       console.log("Error parsing localStorage todos:", error);
//     }
//     return initialTodos;
//   });

//   useEffect(() => {
//     try {
//       window.localStorage.setItem("todos", JSON.stringify(todos));
//     } catch (error) {
//       console.log("Error saving todos to localStorage:", error);
//     }
//   }, [todos]);

//   function saveTodo(obj) {
//     if (todos.some((todo) => todo.title === obj.title)) {
//       toast.error("Todo already exists!");
//     } else {
//       setTodos((prevTodos) => {
//         const updatedTodos = [...prevTodos, obj];
//         toast.success("Added todo!");
//         return updatedTodos;
//       });
//     }
//   }

//   function deleteTodo(id) {
//     setTodos((prevTodos) => {
//       const updatedTodos = prevTodos.filter((item) => item.id !== id);
//       toast.error("Todo Deleted!");
//       return updatedTodos;
//     });
//   }

//   function updateTodo(id, newValue) {
//     setTodos((prevTodos) => {
//       const updatedTodos = prevTodos.map((item) =>
//         item.id === id ? { ...item, title: newValue } : item
//       );
//       toast.success("Todo Updated");
//       return updatedTodos;
//     });
//   }

//   function completedTodo(id) {
//     setTodos((prevTodos) => {
//       const updatedTodos = prevTodos.map((item) =>
//         item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
//       );
//       return updatedTodos;
//     });
//   }

//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />
//       <Context.Provider
//         value={{ todos, saveTodo, deleteTodo, updateTodo, completedTodo }}
//       >
//         {children}
//       </Context.Provider>
//     </>
//   );
// }

// export { Context, TodoContext };


import { createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Context = createContext();

function TodoContext({ children }) {
  const [todos, setTodos] = useState(() => {
    let initialTodos = [];
    try {
      const savedTodos = window.localStorage.getItem("todos");
      if (savedTodos) {
        initialTodos = JSON.parse(savedTodos);
      }
    } catch (error) {
      console.log("Error parsing localStorage todos:", error);
    }
    return initialTodos;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.log("Error saving todos to localStorage:", error);
    }
  }, [todos]);

  function saveTodo(obj) {
    if (todos.some((todo) => todo.title === obj.title)) {
      toast.error("Todo already exists!");
    } else {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos, obj];
        toast.success("Added todo!");
        return updatedTodos;
      });
    }
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((item) => item.id !== id);
      toast.error("Todo Deleted!");
      return updatedTodos;
    });
  }

  function updateTodo(id, newValue) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((item) =>
        item.id === id ? { ...item, title: newValue } : item
      );
      toast.success("Todo Updated");
      return updatedTodos;
    });
  }

  function completedTodo(id) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      );
      return updatedTodos;
    });
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Context.Provider
        value={{ todos, setTodos, saveTodo, deleteTodo, updateTodo, completedTodo }}
      >
        {children}
      </Context.Provider>
    </>
  );
}

export { Context, TodoContext };
