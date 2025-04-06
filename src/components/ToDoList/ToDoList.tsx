import { useState } from "react";
import { ToDo } from "types/toDo";
import { events } from "utils/mockedData";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  const [todos, setTodos] = useState<ToDo[]>(events);

  const handleMarkAsAttended = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, attended: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Listagem de Apresentações</h1>

      {/* Mapeamento dos Eventos */}
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            eventEnei={todo}
            key={todo.id}
            onAttend={handleMarkAsAttended}
          />
        ))}
      </ul>
    </div>
  );
};
