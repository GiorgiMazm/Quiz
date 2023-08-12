describe("New Quiz page", () => {
  beforeEach(() => cy.visit("http://localhost:3000/newQuiz"));
  it("has a page title", () => {
    cy.get("h1").should("contain.text", "New Quiz");
  });
});
