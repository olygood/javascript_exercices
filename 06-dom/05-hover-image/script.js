/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const imgSource = document.querySelector("img").getAttribute("src");
    const newImage = document.querySelector("img").getAttribute("data-hover")
    document.querySelector("figure").addEventListener('mouseenter', ()=>{
        document.querySelector("img").src = newImage;
    })
    document.querySelector("figure").addEventListener('mouseleave', ()=>{
        document.querySelector("img").src = imgSource;
    })
})();
