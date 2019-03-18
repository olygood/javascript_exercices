/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */


(function () {

    const date = new Date();
    const hour = date.getHours();
    hour >= 18 ? document.getElementById("target").innerHTML = "Bonsoir" : document.getElementById("target").innerHTML = "Bonjour";

})();
