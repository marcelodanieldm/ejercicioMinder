
class BasePage {
    visit(url) {
        cy.visit('https://www.fravega.com/');
    }
}
export default BasePage;