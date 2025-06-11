
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../pages/homePage'; // Importa el Page Object


Given('Accedo a la pagina de Fravega', () => {
    homePage.navigateToFravega();
});

And('El popup "Ingresa tu ubicacion" se visualiza', () => {
    homePage.verifyPostalCodePopupIsVisible();
});

When('Ingreso el codigo postal "1405"', (postalCode) => {
    homePage.enterPostalCode(postalCode);
});

And('Hago clic en el boton "Guardar"', (buttonName) => {

    if (buttonName === 'Guardar') {
        homePage.clickSaveButton();
    } else {
        cy.log(`Boton "${buttonName}" no implementado en este paso.`);
    }
});

And('El popup "Ingresa tu ubicacion" se cierra', () => {
    homePage.verifyPostalCodePopupIsClosed();
});

Then('Se visualiza el codigo postal ingresado en el lado superior izquierdo de la pagina', (message) => {
    homePage.verifySuccessToastIsVisible(message);
});