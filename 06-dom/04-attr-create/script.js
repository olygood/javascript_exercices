/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {
    const value = document.getElementById("source").getAttribute("data-image");
    const image = document.createElement("img");
    image.src = value;
    document.getElementById("target").appendChild(image);
    document.getElementById("source").parentNode.removeChild(source);
})();
