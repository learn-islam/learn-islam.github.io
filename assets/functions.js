function moreButton () {
    var dat = document.getElementById("more-button-10:89-93");
    var div = document.getElementById("more-quran-10-89-93");
    if (dat.innerHTML === "Load 10:89-93") {
        dat.innerHTML = "Hide";
        div.style.display = "block";
        window.setTimeout(function() {
            div.style.transform = "scaleX(1)";
            div.style.opacity = "1";
        }, 700);

    } else if (dat.innerHTML === "Hide"){
        dat.innerHTML = "Load 10:89-93";
        div.style.transform = "scaleX(0)";
        div.style.opacity = "0";
           
        window.setTimeout(function() {
            div.style.display = "none";
        }, 700);
    }
}