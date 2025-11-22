import { render, screen } from "@testing-library/react";
import { App } from "../App";

describe("App", () => {
  it("renderiza as seções principais", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /Liberamos caixa tributário com método, evidências e segurança\./i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /Consultoria tributária especializada/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /Solicitar avaliação preliminar/i })
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", { name: /Receber análise inicial/i }).length
    ).toBeGreaterThan(0);
  });

  it("expõe elementos com animação para consumo do script de motion", () => {
    render(<App />);
    const motionElements = document.querySelectorAll("[data-motion]");
    expect(motionElements.length).toBeGreaterThan(0);
  });
});
