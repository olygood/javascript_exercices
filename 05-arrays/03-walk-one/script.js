/* becode/javascript
 *
 * /05-arrays/03-walk-one/script.js - 5.3: parcours de tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener('click', ()=>{
        for(let i=0;i<fruits.length;i++){
            console.log(fruits[i]);
        }
    })
})();
