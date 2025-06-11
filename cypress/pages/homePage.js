
import BasePage from './basePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.postalCodePopup = '<div data-test-id="geo-modal-wrapper" class="sc-gEkIjz bXzHmq"><div><div class="sc-hoLEA cycKku">Ingresá tu ubicación</div><p class="sc-bOhtcR kFwBJv">Vamos a mostrarte las mejores opciones de entrega.</p></div><div class="sc-fUBkdm bOAvoE"><form action="#"><div class="sc-kgOKUu gZUbCs"><div class="sc-bfhvDw eVUFtF"><label class="sc-lbJcrp sc-eifrsQ bQLvBd hVGQnQ">Código Postal</label><input type="tel" inputmode="numeric" pattern="[0-9]*" name="postalNumber" id="header-geo-location-form-postal-number" data-test-id="header-geo-location-form-postal-number" placeholder="Ej 1414" autocomplete="off" maxlength="4" size="10" class="sc-epALIP kcMdNS sc-cMa-dbN bDaohD" value="" style="display: inline-block; background-color: rgb(255, 255, 255); font-size: 14px; padding: 8px;"><a href="https://www6.oca.com.ar/BuscadorCP/" target="_blank" data-test-id="link-dont-know-postal-code" class="sc-hBtRBD jwcWoV">No sé mi Código Postal <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.14613 2.00006L13.5 2C13.6326 2 13.7598 2.05268 13.8536 2.14644C13.9473 2.24021 14 2.36739 14 2.5V6.88154C14 7.15769 13.7761 7.38154 13.5 7.38154C13.2239 7.38154 13 7.15769 13 6.88154V3.71332L7.14627 9.60963C6.95172 9.8056 6.63514 9.80675 6.43917 9.6122C6.2432 9.41764 6.24205 9.10106 6.43661 8.9051L12.299 3.00002L9.14615 3.00006C8.87001 3.00006 8.64614 2.77621 8.64614 2.50006C8.64614 2.22392 8.86999 2.00006 9.14613 2.00006ZM3.875 4.39774C3.3929 4.39774 3 4.78984 3 5.2761V11.7084C3 12.2104 3.09823 12.4957 3.22805 12.6635C3.34585 12.8158 3.54335 12.9402 3.91322 13H10.2917C10.7243 13 11.0454 12.9426 11.257 12.7898C11.4331 12.6625 11.6318 12.3943 11.6318 11.7084V9.25736C11.6318 8.98122 11.8557 8.75736 12.1318 8.75736C12.408 8.75736 12.6318 8.98122 12.6318 9.25736V11.7084C12.6318 12.5982 12.3612 13.2257 11.8426 13.6004C11.3594 13.9494 10.7604 14 10.2917 14H3.875C3.85071 14 3.82646 13.9982 3.80243 13.9947C3.24801 13.9134 2.76654 13.7013 2.43707 13.2753C2.11602 12.8603 2 12.3192 2 11.7084V5.2761C2 4.23986 2.83832 3.39774 3.875 3.39774H6.79144C7.06758 3.39774 7.29144 3.6216 7.29144 3.89774C7.29144 4.17388 7.06758 4.39774 6.79144 4.39774H3.875Z" fill="#0C59F2"></path></svg></a></div><button type="submit" data-test-id="button-save-postal-code" class="sc-iLsKjm eKLnim sc-eXsaLi fbKGlF">Guardar</button></div></form></div></div>'; // Selector del popup
        this.postalCodeInput = '#header-geo-location-form-postal-number'; // ID del input de código postal
        this.saveButton = '#modal > div.sc-jdUcAg.eDnzkg.sc-dwalKd.hbebNK > div > div.sc-fUBkdm.bOAvoE > form > div > button'; // Selector del botón Guardar
        this.confirmPostalCode = '#__next > div.sc-feoqov.bmsRyD > header > div.sc-faUjhM.jMmHEZ > div.sc-cspYLC.bvPSOo > button > p > b:nth-child(2)'; // Selector genérico para el toast de éxito
    }

    //visitar la página de Fravega
    navigateToFravega() {
        cy.visit('https://www.fravega.com/');
    }
    

    //verificar la visibilidad del popup
    verifyPostalCodePopupIsVisible() {
        cy.get(this.postalCodePopup).should('be.visible');
    }

    //ingresar el código postal
    enterPostalCode(code) {
        cy.get(this.postalCodeInput).type(1405);
    }

    //hacer clic en Guardar
    clickSaveButton() {
        cy.get(this.saveButton).click();
    }

    //verificar que se ingreso con exito el codigo postal
    verifySuccessToastIsVisible(message) {
        cy.get(this.successToast).should('be.visible').and('contain', message);
    }

    //verificar que el popup se haya cerrado
    verifyPostalCodePopupIsClosed() {
        cy.get(this.postalCodePopup).should('not.exist'); // O 'not.be.visible' si se oculta sin desaparecer del DOM
    }
}
export default new HomePage();
