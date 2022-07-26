import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders Surreal Estate link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
