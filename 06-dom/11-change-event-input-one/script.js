/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    const inputMax10 = document.getElementById("pass-one");
    inputMax10.maxLength = 10;
    
    document.querySelector("input").addEventListener("input", ()=>{
        document.getElementById("counter").innerHTML = `${document.getElementById("pass-one").value.length}/10`;
    })
})();
