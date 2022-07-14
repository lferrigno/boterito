// ==UserScript==
// @name         Look 4 Section
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://soysocio.bocajuniors.com.ar/comprar_plano_general.php?eNid=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let alphPriorities =
    {
        'F': 1, 'G': 2, 'H': 3, 'I': 4, 'J': 5, // Platea alta
        'K': 6,
        'LD': 6, 'LIC': 6, 'LID': 6, 'LII': 6, 'LPC': 6, 'LPD': 6, 'LPI': 6, 'LV': 6, // Platea baja
        'MC': 6, 'MD': 6, 'MI': 6, 'P': 6, 'SMV': 6, // Codo sur
        'PLCOS': 6, 'PLCPREF': 6, 'PLCVN': 6, 'PLCVS': 6, 'POP2N': 6, 'POP2S': 6, 'POP3S': 6, 'POPSN': 6, 'POPSS': 6, 'PPN1': 6, 'PPN2': 6, 'PPN3': 6, 'PPS1': 6, 'PPS2': 6, 'PPS3': 6, 'PRN1': 6, 'PRN2': 6, 'PRN3': 6, 'PRS1': 6, 'PRS2': 6, 'PRS3': 6, // Palcos
        'SAC': 6, 'SAD': 6, 'SAI': 6, 'SBC': 6, 'SBD': 6, 'SBI': 6, 'SCD': 6, 'SCI': 6, 'SDD': 6, 'SDI': 6, // Media
        'TN1': 6, 'TN2': 6, 'TN3': 6, 'TN4': 6, 'TN5': 6, 'TS1': 6, 'TS2': 6, 'TS3': 6, 'TS4': 6, 'TS5': 6 // Torres
    };
    let customPriorities =
    {
        'F': 2, 'G': 2, 'H': 2, 'I': 2, 'J': 2, // Platea alta
        'K': 1,
        'LD': 6, 'LIC': 6,  'LII': 6, 'LPC': 6, 'LPD': 6, 'LV': 6, // Platea baja 'LID': 6, 'LPI': 6, 
        'MC': 6, 'MD': 6,  'P': 6, 'SMV': 6, // Codo sur 'MI': 6,
        'SAC': 3, 'SAD': 3, 'SAI': 3, 'SBC': 3, 'SBD': 3, 'SBI': 3, 'SCD': 4, 'SCI': 4, 'SDD': 4, 'SDI': 4, // Media
        'TN1': 6, 'TN2': 6, 'TN3': 6, 'TN4': 6, 'TN5': 6, 'TS1': 6, 'TS2': 6, 'TS3': 6, 'TS4': 6, 'TS5': 6 // Torres
    };
    let sortedBy = customPriorities;
    let prioritizer = function (a, b) {
        if (sortedBy[a.id] > sortedBy[b.id]) {
            return 1;
        }
        if (sortedBy[b.id] > sortedBy[a.id]) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        if (b.id > a.id) {
            return -1;
        }
        return 0;
    };
    let filterer =function (obj) {
        return sortedBy.hasOwnProperty(obj.id)
    };


    $(document).ready(function () {

        setTimeout(function () {

            let freeSection = Array.prototype.slice.call($('.section.enabled'))
                .filter(filterer)
                .sort(prioritizer);

            if (freeSection.length == 0) {
                console.log("No hay tickets");
                setTimeout(function () {
                    location.reload();
                }, 200);

            } else {

                let nid = freeSection[0].getAttribute("data-nid");

                let url = window.location.href;
                if (url.indexOf("?") > 0) {
                    url = url.substring(0, url.indexOf("?"));
                }
                let newUrl = url.replace("comprar_plano_general", "comprar_plano_asiento") + window.location.search + "&esNid=" + nid;
                console.log("Redirecting to "+freeSection[0].getAttribute('id'));
                window.location.href = newUrl;
            }
        }, 300);



    });

})();

