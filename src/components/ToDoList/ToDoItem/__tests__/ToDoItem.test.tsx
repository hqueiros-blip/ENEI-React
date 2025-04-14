import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoItem } from "../ToDoItem";
import { events } from "utils/mockedData";
import userEvent from "@testing-library/user-event";

const onAttendMock = vi.fn();

describe("ToDoItem component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("Renders the details events", async () => {
    const { asFragment } = render(
      <ToDoItem eventEnei={events[0]} onAttend={onAttendMock} />
    );

    expect(screen.getByText(events[0].description)).toBeInTheDocument();
    expect(screen.getByText(events[0].author)).toBeInTheDocument();
    expect(
      screen.getByText(`Horário: ${events[0].scheduleTime}`)
    ).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", events[0].image);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Shows attend button when event is not attended", () => {
    render(<ToDoItem eventEnei={events[0]} onAttend={onAttendMock} />);

    const button = screen.getByRole("button", {
      name: /Marcar evento como assistido/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("Call onAttend function with the correct Id", async () => {
    const user = userEvent.setup();
    render(<ToDoItem eventEnei={events[0]} onAttend={onAttendMock} />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(onAttendMock).toHaveBeenCalledWith(events[0].id);
  });

  it("Shows attended message when event was attended", () => {
    const attendedEvent = { ...events[0], attended: true };

    render(<ToDoItem eventEnei={attendedEvent} onAttend={onAttendMock} />);

    expect(screen.getByText("Evento Assistido ✅")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
