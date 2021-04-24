// JavaScript Document

/* 
    Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon.
    Also toggles the hamburger menu to switch to a cross icon when menu is open, based on
    https://jonsuh.com/hamburgers/
*/
function toggleMenu() {
    const topnav = document.getElementsByClassName("topnav")[0];
    topnav.classList.toggle("responsive"); // toggle the menu
    const hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("is-active"); // toggle the cross and hamburger menu
}