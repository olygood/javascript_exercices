/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    const tab = document.createElement("table");
    const tabBody = document.createElement("tbody");

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("tr");
        
        for (let j = 0; j < 1; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(i + 1);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabBody.appendChild(row);
    }
    tab.appendChild(tabBody);
    tab.setAttribute("border", "2");

    document.getElementById("target").appendChild(tab);
})();
