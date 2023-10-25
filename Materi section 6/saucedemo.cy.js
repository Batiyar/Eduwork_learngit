describe("Sauce Demo testing", () => {
  it("Should be able to login", () => {
    cy.userlogin()
  });
  it("Should be able to sorting", () => {
    cy.userlogin()
    cy.get("select").select("Name (A to Z)");
    cy.get("select").select("za");
    cy.get("select").select("lohi");
    cy.get("select").select("hilo");
  });
  it("User should see items they add to cart", () => {
    cy.userlogin()
    cy.get("div.inventory_container > div > div:nth-of-type(1) button").click();
    cy.get("div.inventory_container > div > div:nth-of-type(2) button").click();
    cy.get("path").click();
    cy.location("href").should("eq", "https://www.saucedemo.com/v1/cart.html");
    cy.get("div:nth-of-type(4) button").click();
  });
  it("Should be able to checkout", () => {
    cy.userlogin()
    cy.get("div.inventory_container > div > div:nth-of-type(1) button").click();
    cy.get("div.inventory_container > div > div:nth-of-type(2) button").click();
    cy.get("path").click();
    cy.location("href").should("eq", "https://www.saucedemo.com/v1/cart.html");
    cy.get("a.btn_action").click();
    cy.location("href").should("eq", "https://www.saucedemo.com/v1/checkout-step-one.html");
    cy.get("[data-test='firstName']").click();
    cy.get("[data-test='firstName']").type("username_test");
    cy.get("[data-test='lastName']").click();
    cy.get("[data-test='lastName']").type("username_test");
    cy.get("[data-test='postalCode']").click();
    cy.get("[data-test='postalCode']").type("8181");
    cy.get("div.checkout_buttons > input").click();
    cy.location("href").should("eq", "https://www.saucedemo.com/v1/checkout-step-two.html");
    cy.get("a.btn_action").click();
    cy.location("href").should("eq", "https://www.saucedemo.com/v1/checkout-complete.html");
  });
  it("User should be able to reset app state", () => {
    cy.userlogin()
    cy.get("div.inventory_container > div > div:nth-of-type(1) button").click();
    cy.get("div.inventory_container > div > div:nth-of-type(1) button").click();
    cy.get("div.inventory_container > div > div:nth-of-type(2) button").click();
    cy.get("div.inventory_container > div > div:nth-of-type(2) button").click();
    cy.get("#menu_button_container div:nth-of-type(3) button").click();
    cy.get("#reset_sidebar_link").click();
    cy.get("#reset_sidebar_link").click();
  });
  it("Able logout to login page", () => {
    cy.userlogin()
    cy.get("#menu_button_container div:nth-of-type(3) button").click();
    cy.get("#logout_sidebar_link").click();
    cy.location("href").should("eq", "https://www.saucedemo.com/v1/index.html");
  });
  it('Should be display error if user type wrong data', () => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    cy.get("[data-test='username']").click();
    cy.get("[data-test='username']").type("standard_user");
    cy.get("[data-test='password']").click();
    cy.get("[data-test='password']").type("ljnollinn");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should('contain', "Epic sadface: Username and password do not match any user in this service")
  });
});
