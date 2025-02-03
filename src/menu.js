export default function loadMenu() {
    const content = document.getElementById("content");
    const menuDiv = document.createElement("div");
    menuDiv.innerHTML = `
        <h1>Our Menu</h1>
        <p>Explore our delicious offerings.</p>
    `;
    content.appendChild(menuDiv);
}