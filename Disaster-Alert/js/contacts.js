document.addEventListener("DOMContentLoaded", () => {
  fetch("data/contacts.json")
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector("#contacts-container");
      container.innerHTML = "";

      const list = document.createElement("ul");
      list.classList.add("contact-list");

      data.forEach(contact => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${contact.name}</strong> (${contact.role}) <br>
          <a href="tel:${contact.phone}">📱 ${contact.phone}</a><br>
          <a href="mailto:${contact.email}">✉️ ${contact.email}</a>
        `;
        list.appendChild(li);
      });

      container.appendChild(list);
    })
    .catch(err => console.error("Error loading contacts:", err));
});
