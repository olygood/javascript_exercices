/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    
    const today = new Date();
    const arrayWeekDay = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const arrayMonth = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    const todayDate = `${arrayWeekDay[today.getDay()]} ${today.getDate()} ${arrayMonth[today.getMonth()]} ${today.getFullYear()}, ${today.getHours()}h${today.getMinutes()}`;
    document.getElementById("target").innerHTML = todayDate;

})();
