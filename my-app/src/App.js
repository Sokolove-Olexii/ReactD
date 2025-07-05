import React from "react";
import "./App.css";

function App() {
  const myName = "Олексій";

  const image = {
    src: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    alt: "Довільне зображення",
  };

  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com",
  };

  const num1 = 1;
  const num2 = 2;
  const sum = num1 + num2;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <h1>Привіт, мене звати {myName}!</h1>
      <p>Ласкаво просимо до нашого сайту</p>

      <img src={image.src} alt={image.alt} />

      <p>
        Моє улюблене посилання:{" "}
        <a href={favoriteSite.url}>{favoriteSite.name}</a>
      </p>

      <p>
        Сума чисел {num1} + {num2} = {sum}
      </p>

      <ul>
        {colors.map((color) => (
          <li>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
