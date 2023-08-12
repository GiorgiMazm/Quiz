describe("Sign up page", () => {
  it("has a page title", () => {
    cy.visit("http://localhost:3000/signUp");
    cy.get("h1").should("contain.text", "Sign up page");
  });
});
