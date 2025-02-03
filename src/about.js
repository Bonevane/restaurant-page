export default function loadContact() {
    const content = document.getElementById("content");
    const contactDiv = document.createElement("div");
    contactDiv.innerHTML = `
        <h1>Contact Us</h1>
        <p>Reach out to us for reservations and inquiries.</p>
    `;
    content.appendChild(contactDiv);
}
