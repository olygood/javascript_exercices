/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener('click', ()=> {
        const password = document.getElementById("pass-one");
        const confirm = document.getElementById("pass-two");

        if (password.value !== confirm.value) {
            password.style.borderColor = "red";
            confirm.style.borderColor = "red";
        } else {
            password.style.borderColor = "green";
            confirm.style.borderColor = "green";
        }
    })



})();
