export default function loadHome() {
    const content = document.getElementById("content");
    const homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>Delicious food, cozy ambiance, and great service await you!</p>
    `;
    content.appendChild(homeDiv);
}