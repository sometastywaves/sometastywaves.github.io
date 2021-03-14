function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function Yearjs() {
    var n = new Date()
    var y = n.getFullYear();
    document.getElementById("year").innerHTML = y
}
Yearjs();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
document.getElementById("timework").innerHTML = new Date().toLocaleDateString("en-us", options);