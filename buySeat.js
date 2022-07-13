// ==UserScript==
// @name         Buy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://soysocio.bocajuniors.com.ar/comprar_plano_asiento.php?eNid=*&esNid=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';



    $(document).ready(function () {

        setTimeout(function () {

            document.getElementsByClassName('loc d')[0].children[0].click()
            document.getElementById('btnReservar').click()

        }, 300);


    });

})();

