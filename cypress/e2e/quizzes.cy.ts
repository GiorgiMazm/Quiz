describe("Quizzes page", () => {
  it("has a page title", () => {
    cy.visit("http://localhost:3000/quizzes");
    cy.get("h1").should("contain.text", "Choose your quiz");
  });
});
