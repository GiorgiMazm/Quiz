describe("Sign in page", () => {
  it("has a page title", () => {
    cy.visit("http://localhost:3000/signIn");
    cy.get("h1").should("contain.text", "Sign in Page");
  });
});
