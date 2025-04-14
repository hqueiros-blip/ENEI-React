import { ToDo } from "types/toDo";
import { events } from "utils/mockedData";
import { ToDoItem } from "./ToDoItem";
import { useEffect, useState } from "react";
import { LoadingPage } from "layout/LoadingPage";

export const ToDoList = () => {
  const [todos, setTodos] = useState<ToDo[]>(events);
  const [isLoading, setIsLoading] = useState(true);

  const handleMarkAsAttended = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, attended: true } : todo
      )
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <h1>Listagem de Apresentações</h1>

      {/* Mapeamento dos Eventos */}
      <ul>
        {todos.map((event) => (
          <ToDoItem
            eventEnei={event}
            key={event.id}
            onAttend={handleMarkAsAttended}
          />
        ))}
      </ul>
    </div>
  );
};
