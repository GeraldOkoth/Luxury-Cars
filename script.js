// Function to toggle the menu open and close
function toggleMenu() {
    var menu = document.getElementById("menuLinks");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        
    } else {
        menu.style.display = "block";
    }
}