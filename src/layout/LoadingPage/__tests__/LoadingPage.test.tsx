import { render } from "@testing-library/react";
import { LoadingPage } from "../LoadingPage";

describe("Loading Layout", () => {
  it("Snapshot of Loadinf", async () => {
    const { asFragment } = render(<LoadingPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
