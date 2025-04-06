import { ToDoItemProps } from "types/toDo";
import "./ToDoItem.scss";

// Recebe o evento e a função de marcar como assistido
export const ToDoItem = ({ eventEnei, onAttend }: ToDoItemProps) => {
  return (
    <li className="event__list">
      {/* Imagem do evento */}
      <img
        src={eventEnei.image}
        alt={eventEnei.author}
        className="event__image"
      />

      {/* Detalhes do evento */}
      <div className="event__details">
        <div>
          <h2>{eventEnei.description}</h2>
        </div>
        <div>
          <h3>{eventEnei.author}</h3>
        </div>
        <div>
          <h4>Horário: {eventEnei.scheduleTime}</h4>
        </div>
        {/* Botão para marcar evento como assistido */}
        {!eventEnei.attended && (
          <button
            onClick={() => onAttend(eventEnei.id)}
            className="event__button"
          >
            Marcar evento como assistido
          </button>
        )}
        {/* Exibe o ícone de check se o evento foi assistido */}
        {eventEnei.attended && (
          <div className="event__attended">
            <span>Evento Assistido ✅</span>
          </div>
        )}
      </div>
    </li>
  );
};
