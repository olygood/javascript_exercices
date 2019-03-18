/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener('click', ()=> {
        const rand = [];

        for (let i = 0; i < 10; i++) {
            rand.push(Math.floor(Math.random() * 100) + 1);
            document.getElementById(`n-${i + 1}`).innerHTML = rand[i];
        }
        document.getElementById("min").innerHTML = Math.min(...rand);
        document.getElementById("max").innerHTML = Math.max(...rand);
        const sum = rand.reduce((a, b) => (a + b));
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum / rand.length;
    })

})();
