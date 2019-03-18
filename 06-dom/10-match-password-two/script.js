/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener('click', ()=> {

        const password = document.getElementsByTagName("input")[0];
        const confirm = document.getElementsByTagName("input")[1];
        const att = document.createAttribute("class");
        const att2 = document.createAttribute("class");
        att.value = "error";
        att2.value = "error";

        if (password.value !== confirm.value) {
            password.setAttributeNode(att);
            confirm.setAttributeNode(att2);
        }
    })



})();
