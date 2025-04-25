// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import Home from "../src/components/Home/Home";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe("App component", () => {
  it("renders correct heading", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading").textContent).toMatch(/eMart/i);
  });
});
