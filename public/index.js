document.addEventListener("DOMContentLoaded", () => {
    // Say that JS is working on the tester.
    var jsCheck = document.getElementById("js-check")
    jsCheck.innerHTML = "If you're seeing this, then JS is working."

    // if css-line is red, then CSS is working. If so, change line.
    var cssCheck = document.getElementById("css-check")
    var computedStyle = window.getComputedStyle(cssCheck)
    var color = computedStyle.getPropertyValue("color")
    if (color == "rgb(255, 0, 0)") {
        cssCheck.innerHTML = "If you're seeing this, then CSS is working."
        cssCheck.style.color = "black"
    }
})