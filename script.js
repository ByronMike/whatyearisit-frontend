fetch("https://whatyearisit-backend-three.vercel.app/date")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
