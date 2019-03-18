/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
   
    const performOperation = (operation => {

        switch (operation) {
            case "addition":
                alert(parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value));
                break;
            case "substraction":
                alert(parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value));
                break;
            case "multiplication":
                alert(parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value));
                break;
            case "division":
                alert(parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value));
                break;
            default:
                break;
        }
    });

    Array.from(document.querySelectorAll("button.operator")).forEach($btn => {
        $btn.addEventListener('click', ()=> {
            performOperation($btn.id);
        });
    });
})();
