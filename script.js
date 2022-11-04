function callDate() {
  fetch("http://localhost:3000/date")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#body").innerHTML += `
        <p id="year"></p>
        `;
    });
}

callDate();

fetch("https://whatyearisit-backend-three.vercel.app/date")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
