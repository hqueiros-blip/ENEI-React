import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { events } from "utils/mockedData";
import { ToDoList } from "../ToDoList";

describe("ToDoList Component", () => {
  it("Snapshot of List of events", () => {
    const { asFragment } = render(<ToDoList />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Render List of events", () => {
    render(<ToDoList />);

    // Usando os mocks verificar se todos os eventos estão visíveis
    events.forEach((event) => {
      expect(screen.getByText(event.description)).toBeInTheDocument();
    });
  });

  it("Mark a event as attended", async () => {
    const user = userEvent.setup();
    render(<ToDoList />);

    // Verificar se existe o botão para marcar o evento como assistido
    const button = screen.getAllByRole("button", {
      name: /Marcar evento como assistido/i,
    });

    // Uma vez que temos 2 eventos devemos ter 2 botões disponíveis
    expect(button).toHaveLength(2);

    // Clicar no 1º botão existente
    await user.click(button[0]);

    // Verificar que teve o comportamento esperado de o evento ser marcado como assistido
    await waitFor(() => {
      expect(screen.getByText("Evento Assistido ✅")).toBeInTheDocument();
    });
  });
});
