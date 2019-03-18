/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", ()=> {
        let nombre = "";
        for (let i = 1; i < 21; i++) {
            if (i % 2 == 0) {
                nombre += `Le carré de ${i} est : ${i ** 2}\n`;
            }
        }
        alert(nombre);

    });

})();
