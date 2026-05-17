describe("home page", () => {
  it("renders the landing content and toggles dark mode", () => {
    cy.visit("/");

    cy.contains(
      "Zoriva ma teraz gotową bazę pod testy e2e i przełączanie dark mode.",
    ).should("be.visible");

    cy.get('[data-testid="theme-dark"]').click();
    cy.get("html").should("have.class", "dark");

    cy.get('[data-testid="theme-light"]').click();
    cy.get("html").should("not.have.class", "dark");
  });
});
