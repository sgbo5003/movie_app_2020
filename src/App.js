import React from "react";
import img01 from "./images/1.jpg";
import img02 from "./images/2.jpg";
import img03 from "./images/3.jpg";
import img04 from "./images/4.jpg";
import img05 from "./images/5.jpg";

function Food({ name, picture, alt0 }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture} alt={alt0} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "치킨",
    image: img01,
    message: "치킨 사진",
  },
  {
    id: 2,
    name: "닭발",
    image: img02,
    message: "닭발 사진",
  },
  {
    id: 3,
    name: "만두",
    image: img03,
    message: "만두 사진",
  },
  {
    id: 4,
    name: "피자",
    image: img04,
    message: "피자 사진",
  },
  {
    id: 5,
    name: "떡볶이",
    image: img05,
    message: "떡볶이 사진",
  },
];

function App() {
  //return <div className="App" />;
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          alt0={dish.message}
        />
      ))}
    </div>
  );
}

export default App;
