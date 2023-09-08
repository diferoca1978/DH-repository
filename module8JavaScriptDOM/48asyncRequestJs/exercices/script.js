const list = document.querySelector("ul");

fetch("https://swapi.dev/api/people")
  .then((response) => response.json())

  .then((data) => {
    const characters = data.results;

    for (let i = 0; i < characters.length; i++) {
      let character = characters[i];

      list.innerHTML +=
        "<li>" +
        characters[i].name +
        " / " +
        characters[i].birth_year +
        "</li>";
    }
  });
