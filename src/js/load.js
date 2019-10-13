
function show(elem) {
    var paragraph = elem.querySelector(".collapse");
    if (paragraph.style.display == "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}