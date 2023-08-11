describe("HomePage", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").should("have.text", "This is home page!");
    cy.get("a").contains("List of quizzes").should("exist");
    cy.get("a").contains("List of quizzes").click();
    cy.url().should("eq", "http://localhost:3000/quizzes");
  });
});
