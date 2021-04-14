import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  it("renders heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});
