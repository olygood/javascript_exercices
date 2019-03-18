/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", ()=> {
        const now = new Date();
        let year = document.getElementById("dob-year").value;
        let month = document.getElementById("dob-month").value;
        let day = document.getElementById("dob-day").value;
        const anniversary = new Date(`${year}/${month}/${day}`);
        let age = now.getFullYear() - anniversary.getFullYear();

        anniversary.setFullYear(now.getFullYear());

        if (now < anniversary) {
            age--;
        }
        alert(`Tu as ${age} ans`);
    })

})();
