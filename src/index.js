import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./about";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const contactBtn = document.getElementById("about-btn");
    
    function clearContent() {
        content.innerHTML = "";
    }
    
    homeBtn.addEventListener("click", () => {
        clearContent();
        loadHome();
    });
    
    menuBtn.addEventListener("click", () => {
        clearContent();
        loadMenu();
    });
    
    contactBtn.addEventListener("click", () => {
        clearContent();
        loadContact();
    });
    
    loadHome();
});