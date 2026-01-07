document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#alerts-container");

  fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=5")
    .then(res => res.json())
    .then(data => {
      container.innerHTML = "";
      if (data.features.length === 0) {
        container.innerHTML = "<p>No recent disasters reported.</p>";
        return;
      }
      data.features.forEach(eq => {
        const div = document.createElement("div");
        div.classList.add("alert-card");
        div.innerHTML = `
          <strong>${eq.properties.place}</strong><br>
          Magnitude: ${eq.properties.mag}<br>
          <a href="${eq.properties.url}" target="_blank">More info</a>
        `;
        container.appendChild(div);
      });
    })
    .catch(() => {
      container.innerHTML = "<p>⚠️ Failed to load alerts.</p>";
    });
});
