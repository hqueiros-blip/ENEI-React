export type ToDos = {
  eventEnei: ToDo;
};

export type ToDo = {
  id: number;
  image: string;
  author: string;
  description: string;
  scheduleTime: string;
  attended: boolean;
};

export interface ToDoItemProps {
  eventEnei: ToDo; // Aqui estamos tipando o evento
  onAttend: (id: number) => void; // Função que será chamada ao clicar no botão
}
