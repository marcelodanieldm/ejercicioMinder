Feature: Ingreso del Código Postal en Fravega

  Scenario: Ingreso exitoso de un código postal
    Given Accedo a la pagina de Fravega
    And El popup "Ingresa tu ubicacion" se visualiza
    When Ingreso el codigo postal "1405"
    And Hago clic en el boton "Guardar"
    And El popup "Ingresa tu ubicacion" se cierra
    Then Se visualiza el codigo postal ingresado en el lado superior izquierdo de la pagina