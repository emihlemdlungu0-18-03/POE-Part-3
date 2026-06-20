function updateDateTime (){
document.getElementById ('dateTime').innerHTML = new Date().toLocaleDateString();
}
updateDateTime();
setInterval(updateDateTime, 1000);

function toggleMenu(){ document.getElementById("navMenu").classList.toggle("show");

}
